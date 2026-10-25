import type { IPollPreviewListFilters } from '../../model/types/poll-preview-list-filters.interface';
import type { TPollPreviewListSortOptionValue } from '../../model/types/poll-preview-list-sort-option-value.type';

export interface IPollPreviewsTableProps {
    filters: IPollPreviewListFilters;
    sortOptionValue: TPollPreviewListSortOptionValue | null;
}
