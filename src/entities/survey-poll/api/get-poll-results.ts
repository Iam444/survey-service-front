import { ApiClient, PollEndpoints } from '@/shared/api';
import type { IPollResultsResponseDTO } from '@/shared/api';

export type TGetPollResultsResponse = IPollResultsResponseDTO;

export const getPollResults = async (pollId: string): Promise<IPollResultsResponseDTO> => {
    const { data } = await ApiClient.get<IPollResultsResponseDTO>(PollEndpoints.getResults(pollId));

    return data;
};
