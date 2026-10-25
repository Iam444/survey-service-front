import type { ReactElement } from 'react';
import type { TPollElectionsOption } from '@/entities/survey-poll';

export interface IElectionsOptionsManagerProps {
    options: TPollElectionsOption[];
    onOptionsUpdate: (action: (prevState: TPollElectionsOption[]) => TPollElectionsOption[]) => void;
    children: (isStepCompleted: boolean) => ReactElement;
}
