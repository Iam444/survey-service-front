import { PollStatisticsDisplayFormatEnum } from '@/entities/survey-poll';
import type { ISelectOption } from '@/shared/ui/select';
import type { TPollStatisticsDisplayFormat } from '@/entities/survey-poll';

interface IPollStatisticsDisplayFormatOption extends ISelectOption<TPollStatisticsDisplayFormat> {
    description: string;
}

export const DefaultPollStatisticsDisplayFormatOption = {
    value: PollStatisticsDisplayFormatEnum.PARTIAL,
    label: 'Частичная статистика',
    description: 'Будет показано распределение голосов без указания авторства, участники опроса голосуют анонимно',
} satisfies IPollStatisticsDisplayFormatOption;

export const PollStatisticsDisplayFormatOptions: IPollStatisticsDisplayFormatOption[] = [
    {
        value: PollStatisticsDisplayFormatEnum.NONE,
        label: 'Не показывать',
        description: 'Будут показаны только результаты голосования',
    },
    DefaultPollStatisticsDisplayFormatOption,
    {
        value: PollStatisticsDisplayFormatEnum.FULL,
        label: 'Полная статистика',
        description: 'Будет показано распределение голосов участников с указанием участников, проголосовавших за ту или иную опцию',
    },
] as const;
