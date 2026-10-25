import { PollFormatEnum } from '@/entities/survey-poll';
import type { ISelectOption } from '@/shared/ui/select';
import type { TIconName } from '@/shared/ui/icon';
import type { TPollFormat } from '@/entities/survey-poll';

interface IPollFormatOption extends ISelectOption<TPollFormat> {
    description: string;
    iconName: TIconName;
}

export const DefaultPollFormatOption = {
    value: PollFormatEnum.VOTING,
    label: 'Голосование',
    description: 'Обычное голосование за любые прописанные опции',
    iconName: 'pencil',
} satisfies IPollFormatOption;

export const PollFormatOptions: IPollFormatOption[] = [
    DefaultPollFormatOption,
    {
        value: PollFormatEnum.ELECTIONS,
        label: 'Выборы',
        description: 'В качестве опций голосования выступаю пользователи системы',
        iconName: 'person',
    },
] as const;
