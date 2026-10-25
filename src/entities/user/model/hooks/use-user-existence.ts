import { useMutation } from '@tanstack/react-query';
import { getUserExistence } from '../../api/get-user-existence';
import type { UseMutationResult } from '@tanstack/react-query';
import type { APIError } from '@/shared/api';
import type { TGetUserExistenceResponse, TGetUserExistenceRequest } from '../../api/get-user-existence';

export const useUserExistence = (): UseMutationResult<TGetUserExistenceResponse, APIError, TGetUserExistenceRequest> => {
    return useMutation({
        mutationFn: getUserExistence,
    });
};
