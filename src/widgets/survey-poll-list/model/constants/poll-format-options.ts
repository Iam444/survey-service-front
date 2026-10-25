import { PollFormatLabelMap, PollFormatEnum } from '@/entities/survey-poll';
import type { ISelectOption } from '@/shared/ui/select';
import type { TPollFormat } from '@/entities/survey-poll';

export type TPollFormatOption = ISelectOption<TPollFormat>;

export const PollFormatOptions: TPollFormatOption[] = [
    { value: PollFormatEnum.VOTING, label: PollFormatLabelMap[PollFormatEnum.VOTING] },
    { value: PollFormatEnum.ELECTIONS, label: PollFormatLabelMap[PollFormatEnum.ELECTIONS] },
] as const;
