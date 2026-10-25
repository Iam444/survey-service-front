import { PollAccessTypeEnum } from '@/entities/survey-poll';
import type { ISelectOption } from '@/shared/ui/select';
import type { TPollAccessType } from '@/entities/survey-poll';

interface IPollAccessTypeOption extends ISelectOption<TPollAccessType> {
    description: string;
}

export const DefaultPollAccessTypeOption = {
    value: PollAccessTypeEnum.PUBLIC,
    label: 'Публичный',
    description: 'Голосование доступно всем пользователям',
} satisfies IPollAccessTypeOption;

export const PollAccessTypeOptions: IPollAccessTypeOption[] = [
    DefaultPollAccessTypeOption,
    {
        value: PollAccessTypeEnum.REGISTERED,
        label: 'Для зарегистрированных',
        description: 'Голосование доступно только зарегистрированным пользователям',
    },
    {
        value: PollAccessTypeEnum.SPECIFIED,
        label: 'Ограниченный',
        description: 'Голосование доступно только Вам и указанным пользователям',
    },
] as const;
