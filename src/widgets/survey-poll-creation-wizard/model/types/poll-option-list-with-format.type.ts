import { PollFormatEnum } from '@/entities/survey-poll';
import type { TPollElectionsOption, TPollPlainOption } from '@/entities/survey-poll';

interface IPollPlainOptionListWithFormat {
    format: typeof PollFormatEnum.VOTING;
    options: TPollPlainOption[];
}
interface IPollElectionsOptionListWithFormat {
    format: typeof PollFormatEnum.ELECTIONS;
    options: TPollElectionsOption[];
}

export type TPollOptionListWithFormat = IPollPlainOptionListWithFormat | IPollElectionsOptionListWithFormat;
