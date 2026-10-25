import type { IVotingPollOverviewResponseDTO, IElectionsPollOverviewResponseDTO } from '@/shared/api/types';

export type TVotingPoll = Omit<IVotingPollOverviewResponseDTO, 'viewerSelection'> & {
    id: string;
};

export type TElectionsPoll = Omit<IElectionsPollOverviewResponseDTO, 'viewerSelection'> & {
    id: string;
};

export type TPoll = TVotingPoll | TElectionsPoll;
