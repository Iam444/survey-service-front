import { createOptimisticMutation } from '@/shared/lib/create-optimistic-mutation';
import { APIError } from '@/shared/api';
import { PollQueryKeys, PollMutationKeys } from '@/entities/survey-poll';
import { retractPollVote } from '../../api/retract-poll-vote';
import type { TGetPollOverviewResponse } from '@/entities/survey-poll';
import type { IRetractPollVoteRequest } from '../../api/retract-poll-vote';

export const useRetractPollVote = createOptimisticMutation<TGetPollOverviewResponse, APIError, IRetractPollVoteRequest>({
    mutationFn: retractPollVote,
    mutationKeySelector: (variables) => PollMutationKeys.detail(variables.pollId),
    cacheKeySelector: (variables) => PollQueryKeys.detail(variables.pollId),
    updateCacheFn: (prevData) => ({
        ...prevData,
        viewerSelection: [],
    }),
});
