import { createContext, useContext } from 'react';
import type { TNextStepIdGetter } from '@/shared/ui/wizard/types';

export interface IWizardContext {
    currentStepId: string;
    isFirstStep: boolean;
    registerStepRoute: (stepId: string, nextStepId: TNextStepIdGetter) => void;
    proceedNextStep: () => Promise<void>;
    returnToPrevStep: () => void;
}

export const WizardContext = createContext<IWizardContext | null>(null);

export const useWizard = (): IWizardContext => {
    const context = useContext(WizardContext);

    if (!context) throw new Error('[Wizard]: Подкомпоненты должны быть внутри <WizardRoot />');

    return context;
};
