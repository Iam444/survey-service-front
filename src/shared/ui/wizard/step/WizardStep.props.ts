import type { HTMLAttributes } from 'react';
import type { TNextStepIdGetter } from '../types';

export interface IWizardStepProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
    nextStepId: TNextStepIdGetter;
}
