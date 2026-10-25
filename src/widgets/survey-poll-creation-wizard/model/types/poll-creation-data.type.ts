import type { TPoll } from '@/entities/survey-poll';
import type { TPollGeneralData } from './poll-general-data.type';
import type { TPollOptionListWithFormat } from './poll-option-list-with-format.type';

export type TPollCreationData = TPollGeneralData & TPollOptionListWithFormat & Pick<TPoll, 'settings'>;
