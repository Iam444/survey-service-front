import type { TGetUserListRequest } from '../../api/get-user-list';

export const UserQueryKeys = {
    all: ['users'] as const,
    viewer: () => [...UserQueryKeys.all, 'current'] as const,
    lists: () => [...UserQueryKeys.all, ...UserQueryKeys.viewer(), 'list'] as const,
    listsOfScope: (scope: string) => [...UserQueryKeys.lists(), scope] as const,
    list: (scope: string, params: TGetUserListRequest) => [...UserQueryKeys.listsOfScope(scope), params] as const,
};
