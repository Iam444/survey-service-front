import { useMemo } from 'react';
import { PollPreviewListSortOptionValuesEnum } from '../constants/poll-preview-list-sort-option-values-enum';
import type { TSortOrder } from '@/shared/api/types';
import type { TGetPollPreviewListRequest, TPollPreview } from '@/entities/survey-poll';
import type { TPollPreviewListSortOptionValue } from '../types/poll-preview-list-sort-option-value.type';

const PollPreviewListSortOptionsMap: Record<TPollPreviewListSortOptionValue, { [K in keyof Pick<TPollPreview, 'name'>]: TSortOrder } | null> = {
    [PollPreviewListSortOptionValuesEnum.RELEVANCE]: null,
    [PollPreviewListSortOptionValuesEnum.NAME_ASC]: { name: 'asc' },
    [PollPreviewListSortOptionValuesEnum.NAME_DESC]: { name: 'desc' },
};

export const useFormattedPollPreviewListSortBy = (sortOptionValue: TPollPreviewListSortOptionValue | null): TGetPollPreviewListRequest['sortBy'] => {
    return useMemo(() => {
        let formattedSortBy: TGetPollPreviewListRequest['sortBy'] = {};

        if (sortOptionValue && PollPreviewListSortOptionsMap[sortOptionValue]) {
            formattedSortBy = PollPreviewListSortOptionsMap[sortOptionValue];
        }

        return Object.keys(formattedSortBy).length > 0 ? formattedSortBy : undefined;
    }, [sortOptionValue]);
};
