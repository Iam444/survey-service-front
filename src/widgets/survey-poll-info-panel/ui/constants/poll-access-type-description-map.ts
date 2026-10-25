import { PollAccessTypeEnum } from '@/entities/survey-poll';
import type { TPollAccessType } from '@/entities/survey-poll';

export const PollAccessTypeDescriptionMap: Record<TPollAccessType, string> = {
    [PollAccessTypeEnum.PUBLIC]: 'Публичный доступ',
    [PollAccessTypeEnum.REGISTERED]: 'Публичный доступ, для авторизованных пользователей',
    [PollAccessTypeEnum.SPECIFIED]: 'Приватный доступ, для автора и указанных пользователей',
} as const;
