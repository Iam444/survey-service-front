import { useMutation, useQueryClient } from '@tanstack/react-query';
import { APIError } from '@/shared/api';
import { PollQueryKeys } from '@/entities/survey-poll';
import { createPoll } from '../../api/create-poll';
import type { UseMutationResult } from '@tanstack/react-query';
import type { TCreatePollRequest, TCreatePollResponse } from '../../api/create-poll';

export const useCreatePoll = (): UseMutationResult<TCreatePollResponse, APIError, TCreatePollRequest> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createPoll,
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: PollQueryKeys.lists(),
            });
        },
    });
};
