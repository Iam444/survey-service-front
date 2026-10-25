import { ApiClient, PollEndpoints } from '@/shared/api';
import type { IVotingPollOverviewResponseDTO, IElectionsPollOverviewResponseDTO } from '@/shared/api';

export type TGetPollOverviewResponse = IVotingPollOverviewResponseDTO | IElectionsPollOverviewResponseDTO;

export const getPollOverview = async (pollId: string): Promise<TGetPollOverviewResponse> => {
    const { data } = await ApiClient.get<TGetPollOverviewResponse>(PollEndpoints.getOverview(pollId));

    return data;
};
