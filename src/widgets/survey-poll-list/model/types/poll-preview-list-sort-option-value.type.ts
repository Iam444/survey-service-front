import type { PollPreviewListSortOptionValuesEnum } from '../constants/poll-preview-list-sort-option-values-enum';

export type TPollPreviewListSortOptionValue = (typeof PollPreviewListSortOptionValuesEnum)[keyof typeof PollPreviewListSortOptionValuesEnum];
