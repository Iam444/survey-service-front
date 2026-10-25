import { useEffect } from 'react';
import { useWizard } from '../context';
import type { FC } from 'react';
import type { IWizardStepProps } from './WizardStep.props';

export const WizardStep: FC<IWizardStepProps> = ({ id, nextStepId, children, ...props }) => {
    const { currentStepId, registerStepRoute } = useWizard();

    useEffect(() => {
        registerStepRoute(id, nextStepId);
    }, [id, nextStepId, registerStepRoute]);

    if (currentStepId !== id) return null;

    return <div {...props}>{children}</div>;
};
