import { PollStatisticsAccessTypeEnum } from '@/entities/survey-poll';
import type { ISelectOption } from '@/shared/ui/select';
import type { TPollStatisticsAccessType } from '@/entities/survey-poll';

interface IPollStatisticsAccessTypeOption extends ISelectOption<TPollStatisticsAccessType> {
    description: string;
}

export const DefaultPollStatisticsAccessTypeOption = {
    value: PollStatisticsAccessTypeEnum.PUBLIC,
    label: 'Публичный',
    description: 'Статистика голосования видна всем участника опроса',
} satisfies IPollStatisticsAccessTypeOption;

export const PollStatisticsAccessTypeOptions: IPollStatisticsAccessTypeOption[] = [
    DefaultPollStatisticsAccessTypeOption,
    {
        value: PollStatisticsAccessTypeEnum.SPECIFIED,
        label: 'Ограниченный',
        description: 'Статистика голосования видна только Вам и указанным участникам опроса',
    },
    {
        value: PollStatisticsAccessTypeEnum.PRIVATE,
        label: 'Приватный',
        description: 'Статистика голосования видна только Вам',
    },
] as const;
