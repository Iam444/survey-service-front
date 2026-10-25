import type { ReactElement } from 'react';
import type { TPollPlainOption } from '@/entities/survey-poll';

export interface IPlainOptionsManagerProps {
    options: TPollPlainOption[];
    onOptionsUpdate: (action: (prevState: TPollPlainOption[]) => TPollPlainOption[]) => void;
    children: (isStepCompleted: boolean) => ReactElement;
}
