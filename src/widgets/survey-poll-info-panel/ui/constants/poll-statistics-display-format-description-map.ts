import { PollStatisticsDisplayFormatEnum } from '@/entities/survey-poll';
import type { TPollStatisticsDisplayFormat } from '@/entities/survey-poll';

export const PollStatisticsDisplayFormatDescriptionMap: Record<TPollStatisticsDisplayFormat, string> = {
    [PollStatisticsDisplayFormatEnum.NONE]: 'Без статистики',
    [PollStatisticsDisplayFormatEnum.PARTIAL]: 'Частичная статистика',
    [PollStatisticsDisplayFormatEnum.FULL]: 'Полная статистика',
};
