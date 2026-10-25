import { PollPreviewListSortOptionValuesEnum } from './poll-preview-list-sort-option-values-enum';
import type { ISelectOption } from '@/shared/ui/select';
import type { TPollPreviewListSortOptionValue } from '../types/poll-preview-list-sort-option-value.type';

type TPollPreviewListSortOption = ISelectOption<TPollPreviewListSortOptionValue>;

export const DefaultPollPreviewListSortOption = {
    value: PollPreviewListSortOptionValuesEnum.RELEVANCE,
    label: 'По релевантности',
} satisfies TPollPreviewListSortOption;

export const PollPreviewListSortOptions: TPollPreviewListSortOption[] = [
    DefaultPollPreviewListSortOption,
    { value: PollPreviewListSortOptionValuesEnum.NAME_ASC, label: 'По названию: А - Я' },
    { value: PollPreviewListSortOptionValuesEnum.NAME_DESC, label: 'По названию: Я - А' },
] as const;
