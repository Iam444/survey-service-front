import type { HTMLAttributes } from 'react';

export interface IWizardRootProps extends HTMLAttributes<HTMLDivElement> {
    initialStepId: string;
    onWizardComplete?: () => void;
    onWizardDismiss?: () => void;
}
