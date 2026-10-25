import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';

export interface IOptimisticPayload<TError extends Error> {
    readonly onSuccess?: () => void;
    readonly onError?: (error: TError) => void;
}

interface IOptimisticMutationBaseContext<T> {
    readonly dataSnapshot: T | undefined;
    readonly targetQueryKey: readonly unknown[];
}

type TOptimisticMutationResult<TCacheData, TExtension = unknown> = IOptimisticMutationBaseContext<TCacheData> & TExtension;

interface OptimisticMutationConfig<TData, TError extends Error, TVariables, TMutationReturn = void, TContextExtension = object> {
    readonly mutationFn: (variables: TVariables & IOptimisticPayload<TError>) => Promise<TMutationReturn>;
    readonly mutationKeySelector: (variables: TVariables) => readonly unknown[];
    readonly cacheKeySelector: (variables: TVariables) => readonly unknown[];
    readonly updateCacheFn: (oldData: TData, variables: TVariables) => TData;
    readonly onMutateExtended?: (variables: TVariables) => TContextExtension;
    readonly onSettledExtended?: (variables: TVariables) => readonly (readonly unknown[])[];
}

export const createOptimisticMutation = <TCacheData, TError extends Error, TMutationVariables, TMutationResult = void, TContextExtension = object>({
    mutationFn,
    mutationKeySelector,
    cacheKeySelector,
    updateCacheFn,
    onMutateExtended,
    onSettledExtended,
}: OptimisticMutationConfig<TCacheData, TError, TMutationVariables, TMutationResult, TContextExtension>) => {
    return (): UseMutationResult<
        TMutationResult,
        TError,
        TMutationVariables & IOptimisticPayload<TError>,
        TOptimisticMutationResult<TCacheData, TContextExtension>
    > => {
        const queryClient = useQueryClient();

        return useMutation({
            mutationFn,
            onMutate: async (variables): Promise<TOptimisticMutationResult<TCacheData, TContextExtension>> => {
                const targetQueryKey = cacheKeySelector(variables);

                await queryClient.cancelQueries({ queryKey: targetQueryKey });

                const dataSnapshot = queryClient.getQueryData<TCacheData>(targetQueryKey);

                queryClient.setQueryData<TCacheData>(targetQueryKey, (prevData) => (prevData ? updateCacheFn(prevData, variables) : prevData));

                if (variables.onSuccess) {
                    variables.onSuccess();
                }

                const extendedContext = onMutateExtended ? onMutateExtended(variables) : ({} as TContextExtension);

                return {
                    dataSnapshot,
                    targetQueryKey,
                    ...extendedContext,
                };
            },

            onError: (_error, _variables, onMutateResult) => {
                if (onMutateResult && onMutateResult.dataSnapshot !== undefined) {
                    queryClient.setQueryData(onMutateResult.targetQueryKey, onMutateResult.dataSnapshot);
                }
            },

            onSettled: async (_data, _error, variables, context) => {
                if (!context) return;

                const mutationScopeKey = mutationKeySelector(variables);

                if (queryClient.isMutating({ mutationKey: mutationScopeKey }) === 1) {
                    const invalidationPromises: Promise<void>[] = [queryClient.invalidateQueries({ queryKey: context.targetQueryKey })];

                    if (onSettledExtended) {
                        const extraKeys = onSettledExtended(variables);

                        extraKeys.forEach((queryKey) => {
                            invalidationPromises.push(queryClient.invalidateQueries({ queryKey }));
                        });
                    }

                    await Promise.all(invalidationPromises);
                }
            },
        });
    };
};
