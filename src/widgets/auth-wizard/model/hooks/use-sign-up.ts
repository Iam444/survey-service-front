import { useQueryClient, useMutation } from '@tanstack/react-query';
import { ErrorCodes, APIError } from '@/shared/api';
import { UserQueryKeys } from '@/entities/user';
import { signUp } from '../../api/sign-up';
import type { UseMutationResult } from '@tanstack/react-query';
import type { TSignUpRequest } from '../../api/sign-up';

export const useSignUp = (onInvalidCredentialsError: () => void): UseMutationResult<void, APIError, TSignUpRequest> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: signUp,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: UserQueryKeys.viewer() });
        },
        onError: (error) => {
            if (error.code === ErrorCodes.INVALID_CREDENTIALS) {
                onInvalidCredentialsError();
            }
        },
    });
};
