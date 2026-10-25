import { createOptimisticMutation } from '@/shared/lib/create-optimistic-mutation';
import { APIError } from '@/shared/api';
import { PollQueryKeys, PollMutationKeys } from '@/entities/survey-poll';
import { submitPollVote } from '../../api/submit-poll-vote';
import type { IVotingPollOverviewResponseDTO, IElectionsPollOverviewResponseDTO } from '@/shared/api/types';
import type { TViewerSelection } from '../types/viewer-selection.type';
import type { ISubmitPollVoteRequest } from '../../api/submit-poll-vote';

interface IMutationVariables extends ISubmitPollVoteRequest {
    viewerSelection: TViewerSelection;
}

export const useSubmitPollVote = createOptimisticMutation<
    IVotingPollOverviewResponseDTO | IElectionsPollOverviewResponseDTO,
    APIError,
    IMutationVariables
>({
    mutationFn: ({ pollId, payload }) => submitPollVote({ pollId, payload }),
    mutationKeySelector: (variables) => PollMutationKeys.detail(variables.pollId),
    cacheKeySelector: (variables) => PollQueryKeys.detail(variables.pollId),
    updateCacheFn: (prevData, variables) => ({
        ...prevData,
        viewerSelection: variables.viewerSelection,
    }),
});
