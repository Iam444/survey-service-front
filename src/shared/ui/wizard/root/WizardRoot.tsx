import { useState, useMemo, useCallback, useRef } from 'react';
import { WizardContext } from '../context';
import type { FC } from 'react';
import type { TNextStepIdGetter } from '../types';
import type { IWizardContext } from '../context';
import type { IWizardRootProps } from './WizardRoot.props';

export const WizardRoot: FC<IWizardRootProps> = ({ initialStepId, onWizardComplete, onWizardDismiss, children, ...props }) => {
    const [history, setHistory] = useState<string[]>([initialStepId]);

    const stepRoutesMap = useRef<Record<string, TNextStepIdGetter>>({});

    const currentStepId = useMemo(() => history.at(-1)!, [history]);

    const registerStepRoute = useCallback((stepId: string, nextStepIdGetter: TNextStepIdGetter) => {
        stepRoutesMap.current[stepId] = nextStepIdGetter;
    }, []);

    const proceedNextStep = useCallback(async (): Promise<void> => {
        const nextStepIdGetter = stepRoutesMap.current[currentStepId];

        let nextStepId;

        if (typeof nextStepIdGetter === 'function') {
            nextStepId = nextStepIdGetter();

            if (nextStepId instanceof Promise) {
                nextStepId = await nextStepId;
            }
        } else {
            nextStepId = nextStepIdGetter;
        }

        if (nextStepId) {
            setHistory((prevHistory) => [...prevHistory, nextStepId]);
        } else {
            onWizardComplete?.();
        }
    }, [currentStepId, onWizardComplete]);

    const returnToPrevStep = useCallback((): void => {
        if (history.length > 1) {
            setHistory((prevHistory) => prevHistory.slice(0, -1));
        } else {
            onWizardDismiss?.();
        }
    }, [history, onWizardDismiss]);

    const context: IWizardContext = useMemo(
        () => ({
            currentStepId,
            isFirstStep: history.length === 1,
            registerStepRoute,
            proceedNextStep,
            returnToPrevStep,
        }),
        [currentStepId, history, registerStepRoute, proceedNextStep, returnToPrevStep],
    );

    return (
        <WizardContext value={context}>
            <div {...props}>{children}</div>
        </WizardContext>
    );
};
