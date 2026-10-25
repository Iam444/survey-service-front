import type { TPollPreview } from '@/entities/survey-poll';

export interface IPollPreviewListFilters {
    searchName: string | null;
    format: TPollPreview['format'] | null;
    status: TPollPreview['status'] | null;
}
