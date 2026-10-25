import { Wizard } from '@/shared/ui/wizard';
import { EmailField } from '@/shared/ui/email-field';
import { useEmailField } from '@/shared/ui/email-field/hooks';
import type { FC } from 'react';
import type { IWelcomeStepProps } from './WelcomeStep.props';

export const WelcomeStep: FC<IWelcomeStepProps> = ({ email, onEmailEnter }) => {
    const { emailValue, onEmailValueChange } = useEmailField({ initialEmailValue: email, onEmailEnter, debounceDelayMS: 600 });

    const isStemCompleted = email === emailValue.trim();

    return (
        <>
            <EmailField isRequired emailValue={emailValue} onEmailValueChange={onEmailValueChange} />

            <Wizard.NextButton variant="solid" size="medium" disabled={!isStemCompleted}>
                Продолжить
            </Wizard.NextButton>
        </>
    );
};
