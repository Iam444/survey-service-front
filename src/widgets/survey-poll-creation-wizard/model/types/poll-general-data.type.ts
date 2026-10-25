import type { TPoll } from '@/entities/survey-poll';

export type TPollGeneralData = Pick<TPoll, 'name' | 'description' | 'format'>;
