import { useQueryClient, useMutation } from '@tanstack/react-query';
import { APIError } from '@/shared/api';
import { PollQueryKeys, PollMutationKeys } from '@/entities/survey-poll';
import { editPoll } from '@/widgets/survey-poll/api/edit-poll';
import type { UseMutationResult } from '@tanstack/react-query';
import type { TPoll } from '@/entities/survey-poll';
import type { IEditPollRequest } from '@/widgets/survey-poll/api/edit-poll';

export const useEditPoll = (pollId: TPoll['id']): UseMutationResult<void, APIError, IEditPollRequest> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editPoll,
        mutationKey: PollMutationKeys.detail(pollId),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: PollQueryKeys.all,
            });
        },
    });
};
