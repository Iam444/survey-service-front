import { useQueryClient } from '@tanstack/react-query';
import { PollFormatEnum, PollQueryKeys } from '@/entities/survey-poll';
import { useSubmitPollVote } from './use-submit-poll-vote';
import { useRetractPollVote } from './use-retract-poll-vote';
import { useChangePollStatus } from './use-change-poll-status';
import type { ISubmitVotingPollVoteRequestDTO, ISubmitElectionsPollVoteRequestDTO } from '@/shared/api/types';
import type { TPollStatus, TVotingPoll, TElectionsPoll, TPoll } from '@/entities/survey-poll';
import type { TViewerSelection } from '../types/viewer-selection.type';

type TOptionsWithFormat = Pick<TVotingPoll, 'format' | 'options'> | Pick<TElectionsPoll, 'format' | 'options'>;
type TSubmitSelectionPayload = ISubmitVotingPollVoteRequestDTO | ISubmitElectionsPollVoteRequestDTO;

interface IUsePollMutationsResult {
    submitSelection: (optionsWithFormat: TOptionsWithFormat, viewerSelection: TViewerSelection) => void;
    resetSelection: (options: { onSuccess: () => void }) => void;
    changeStatus: (status: TPollStatus) => void;
}

export const usePollMutations = (pollId: TPoll['id']): IUsePollMutationsResult => {
    const queryClient = useQueryClient();

    const submitPollVoteMutator = useSubmitPollVote();
    const retractPollVoteMutator = useRetractPollVote();
    const changePollStatusMutator = useChangePollStatus(pollId);

    const submitSelection = (optionsWithFormat: TOptionsWithFormat, viewerSelection: TViewerSelection): void => {
        const payload: TSubmitSelectionPayload =
            optionsWithFormat.format === PollFormatEnum.VOTING
                ? {
                      format: optionsWithFormat.format,
                      optionDataList: optionsWithFormat.options.filter((option) => viewerSelection.includes(option.id)),
                  }
                : {
                      format: optionsWithFormat.format,
                      optionDataList: optionsWithFormat.options
                          .filter((option) => viewerSelection.includes(option.id))
                          .map((option) => ({
                              id: option.id,
                              name: option.name,
                              description: option.description,
                              candidateId: option.candidate.id,
                          })),
                  };

        submitPollVoteMutator.mutate({
            pollId,
            payload,
            viewerSelection,
            onSuccess: async () => {
                await queryClient.invalidateQueries({ queryKey: PollQueryKeys.detail(pollId) });
            },
        });
    };

    const resetSelection = (options: { onSuccess: () => void }): void => {
        retractPollVoteMutator.mutate({
            pollId,
            onSuccess: async () => {
                await queryClient.invalidateQueries({ queryKey: PollQueryKeys.detail(pollId) });
                options.onSuccess();
            },
        });
    };

    const changeStatus = (status: TPollStatus): void => {
        changePollStatusMutator.mutate({ pollId, payload: { status } });
    };

    return {
        submitSelection,
        resetSelection,
        changeStatus,
    };
};
