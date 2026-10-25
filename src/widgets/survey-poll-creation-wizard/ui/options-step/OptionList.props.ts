import type { ReactElement } from 'react';
import type { TPollPlainOption, TPollElectionsOption } from '@/entities/survey-poll';

export interface IOptionListProps<T extends TPollPlainOption | TPollElectionsOption> {
    options: T[];
    children: (option: T) => ReactElement;
}
