import { useQueryClient, useMutation } from '@tanstack/react-query';
import { APIError } from '@/shared/api';
import { PollQueryKeys, PollMutationKeys } from '@/entities/survey-poll';
import { changePollStatus } from '../../api/change-poll-status';
import type { UseMutationResult } from '@tanstack/react-query';
import type { TPoll } from '@/entities/survey-poll';
import type { IChangePollStatusRequest } from '../../api/change-poll-status';

export const useChangePollStatus = (pollId: TPoll['id']): UseMutationResult<void, APIError, IChangePollStatusRequest> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: changePollStatus,
        mutationKey: PollMutationKeys.detail(pollId),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: PollQueryKeys.all,
            });
        },
    });
};
