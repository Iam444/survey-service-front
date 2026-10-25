import { PollStatisticsAccessTypeEnum } from '@/entities/survey-poll';
import type { TPollStatisticsAccessType } from '@/entities/survey-poll';

export const PollStatisticsAccessTypeDescriptionMap: Record<TPollStatisticsAccessType, string> = {
    [PollStatisticsAccessTypeEnum.PUBLIC]: 'Публичный доступ',
    [PollStatisticsAccessTypeEnum.SPECIFIED]: 'Приватный доступ, для автора и указанных пользователей',
    [PollStatisticsAccessTypeEnum.PRIVATE]: 'Приватный доступ, только для автора',
} as const;
