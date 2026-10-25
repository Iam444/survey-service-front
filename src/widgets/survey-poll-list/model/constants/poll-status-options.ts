import { PollStatusLabelMap, PollStatusEnum } from '@/entities/survey-poll';
import type { ISelectOption } from '@/shared/ui/select';
import type { TPollStatus } from '@/entities/survey-poll';

interface IPollStatusOption extends ISelectOption {
    value: TPollStatus;
}

export const PollStatusOptions: IPollStatusOption[] = [
    { value: PollStatusEnum.CREATED, label: PollStatusLabelMap[PollStatusEnum.CREATED] },
    { value: PollStatusEnum.OPENED, label: PollStatusLabelMap[PollStatusEnum.OPENED] },
    { value: PollStatusEnum.CLOSED, label: PollStatusLabelMap[PollStatusEnum.CLOSED] },
] as const;
