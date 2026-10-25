import { PollStatusEnum } from '@/entities/survey-poll';
import type { TPollStatus } from '../types/poll-status.type';

export const PollStatusLabelMap: Record<TPollStatus, string> = {
    [PollStatusEnum.CREATED]: 'Не опубликован',
    [PollStatusEnum.OPENED]: 'Открыт',
    [PollStatusEnum.CLOSED]: 'Завершен',
} as const;
