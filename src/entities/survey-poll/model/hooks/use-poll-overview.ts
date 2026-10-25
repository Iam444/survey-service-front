import { useQuery, useMutationState } from '@tanstack/react-query';
import { getPollOverview } from '../../api/get-poll-overview';
import { PollQueryKeys, PollMutationKeys } from './poll-keys';
import type { UseQueryResult } from '@tanstack/react-query';
import type { TGetPollOverviewResponse } from '../../api/get-poll-overview';

interface IUsePollOverviewResult extends Pick<UseQueryResult<TGetPollOverviewResponse>, 'data' | 'isPending' | 'isFetching'> {
    isMutating: boolean;
}

export const usePollOverview = (pollId: string): IUsePollOverviewResult => {
    const { data, isPending, isFetching } = useQuery({
        queryKey: PollQueryKeys.detail(pollId),
        queryFn: () => getPollOverview(pollId),
        enabled: Boolean(pollId),
    });

    const activeMutations = useMutationState({
        filters: {
            mutationKey: PollMutationKeys.detail(pollId),
            status: 'pending',
        },
        select: (mutation) => mutation.state.status,
    });

    const isMutating = activeMutations.length > 0;

    return {
        data,
        isPending,
        isFetching,
        isMutating,
    };
};
