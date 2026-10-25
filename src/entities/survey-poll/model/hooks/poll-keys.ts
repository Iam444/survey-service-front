import type { TGetPollPreviewListRequest } from '@/entities/survey-poll';

export const PollQueryKeys = {
    all: ['polls'] as const,
    lists: () => [...PollQueryKeys.all, 'list'] as const,
    listsOfScope: (scope: string) => [...PollQueryKeys.lists(), scope] as const,
    list: (scope: string, params: TGetPollPreviewListRequest) => [...PollQueryKeys.listsOfScope(scope), params] as const,
    details: () => [...PollQueryKeys.all, 'detail'] as const,
    detail: (pollId: string) => [...PollQueryKeys.details(), pollId] as const,
    results: (pollId: string) => [...PollQueryKeys.detail(pollId), 'results'] as const,
};

export const PollMutationKeys = {
    all: () => [...PollQueryKeys.all, 'mutate'] as const,
    detail: (pollId: string) => [...PollMutationKeys.all(), pollId] as const,
};
