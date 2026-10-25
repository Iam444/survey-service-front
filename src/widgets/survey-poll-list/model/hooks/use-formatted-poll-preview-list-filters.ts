import { useMemo } from 'react';
import type { TGetPollPreviewListRequest } from '@/entities/survey-poll';
import type { IPollPreviewListFilters } from '../types/poll-preview-list-filters.interface';

export const useFormattedPollPreviewListFilters = (filters: IPollPreviewListFilters): TGetPollPreviewListRequest['filters'] => {
    return useMemo(() => {
        let formattedFilters: TGetPollPreviewListRequest['filters'] = {};

        if (filters.searchName) {
            formattedFilters = { ...formattedFilters, name: { contains: filters.searchName } };
        }

        if (filters.format) {
            formattedFilters = { ...formattedFilters, format: { is: filters.format } };
        }

        if (filters.status) {
            formattedFilters = { ...formattedFilters, status: { is: filters.status } };
        }

        return Object.keys(formattedFilters).length > 0 ? formattedFilters : undefined;
    }, [filters]);
};
