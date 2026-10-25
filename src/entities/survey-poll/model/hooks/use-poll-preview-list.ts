import { useQuery } from '@tanstack/react-query';
import { getPollPreviewList } from '../../api/get-poll-preview-list';
import { PollQueryKeys } from './poll-keys';
import type { UseQueryResult } from '@tanstack/react-query';
import type { TGetPollPreviewListRequest, TGetPollPreviewListResponse } from '../../api/get-poll-preview-list';

export const usePollPreviewList = (
    scope: string,
    request: TGetPollPreviewListRequest,
    shouldProceedWithEmptyFilters: boolean = true,
): UseQueryResult<TGetPollPreviewListResponse> => {
    return useQuery({
        queryKey: PollQueryKeys.list(scope, request),
        queryFn: async ({ signal }) => getPollPreviewList(request, signal),
        enabled: Boolean(shouldProceedWithEmptyFilters || (!shouldProceedWithEmptyFilters && request.filters)),
    });
};
