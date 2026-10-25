import { PollFormatEnum } from '@/entities/survey-poll';
import type { TPollFormat } from '../types/poll-format.type';

export const PollFormatLabelMap: Record<TPollFormat, string> = {
    [PollFormatEnum.VOTING]: 'Голосование',
    [PollFormatEnum.ELECTIONS]: 'Выборы',
} as const;
