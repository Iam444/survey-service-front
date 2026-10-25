import { useQuery } from '@tanstack/react-query';
import { UserQueryKeys } from '@/entities/user';
import { getUserList } from '../../api/get-user-list';
import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { TGetUserListRequest, TGetUserListResponse } from '../../api/get-user-list';

type TUseUserListOptions = Pick<UseQueryOptions<TGetUserListResponse>, 'placeholderData'>;

export const useUserList = (scope: string, request: TGetUserListRequest, options?: TUseUserListOptions): UseQueryResult<TGetUserListResponse> => {
    return useQuery({
        queryKey: UserQueryKeys.list(scope, request),
        queryFn: async ({ signal }) => getUserList(request, signal),
        ...options,
    });
};
