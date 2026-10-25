import { useQueryClient, useMutation } from '@tanstack/react-query';
import { APIError, ErrorCodes } from '@/shared/api';
import { UserQueryKeys } from '@/entities/user';
import { logIn } from '../../api/log-in';
import type { UseMutationResult } from '@tanstack/react-query';
import type { TLogInRequest } from '../../api/log-in';

export const useLogIn = (onInvalidCredentialsError: () => void): UseMutationResult<void, APIError, TLogInRequest> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: logIn,
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
