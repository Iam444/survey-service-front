import { useQuery } from '@tanstack/react-query';
import { getPollResults } from '../../api/get-poll-results';
import { PollQueryKeys } from './poll-keys';
import type { UseQueryResult } from '@tanstack/react-query';
import type { TGetPollResultsResponse } from '../../api/get-poll-results';

export const usePollResults = (pollId: string): UseQueryResult<TGetPollResultsResponse> => {
    return useQuery({
        queryKey: PollQueryKeys.results(pollId),
        queryFn: () => getPollResults(pollId),
        enabled: Boolean(pollId),
    });
};
