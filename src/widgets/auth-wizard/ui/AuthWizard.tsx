import { useState } from 'react';
import { Wizard } from '@/shared/ui/wizard';
import { Group } from '@/shared/ui/group';
import { Logo } from '@/shared/ui/logo';
import { useUserExistence } from '@/entities/user';
import { AuthWizardStepIds } from '../model/constants/auth-wizard-step-ids';
import { AuthWizardFooter } from './parts/AuthWizardFooter';
import { WelcomeStep } from './welcome-step/WelcomeStep';
import { LogInStep } from './log-in-step/LogInStep';
import { SignUpStep } from './sign-up-step/SignUpStep';
import styles from './AuthWizard.module.scss';
import type { FC } from 'react';
import type { IAuthWizardProps } from './AuthWizard.props';

export const AuthWizard: FC<IAuthWizardProps> = ({ onAuthPass }) => {
    const [email, setEmail] = useState('');

    const { mutateAsync } = useUserExistence();

    const getWelcomeStepNextStepId = async (): Promise<string> => {
        return await mutateAsync({ email })
            .then(({ isExists }) => (isExists ? AuthWizardStepIds.LOG_IN : AuthWizardStepIds.SIGN_UP))
            .catch(() => AuthWizardStepIds.WELCOME);
    };

    return (
        <Wizard.Root initialStepId={AuthWizardStepIds.WELCOME} onWizardComplete={onAuthPass} className={styles.AuthWizard}>
            <Group direction="column" justify="center" gap="24" className={styles.AuthWizardContent}>
                <Logo size="extraLarge" className={styles.AuthWizardLogo} />

                <Wizard.Step id={AuthWizardStepIds.WELCOME} nextStepId={getWelcomeStepNextStepId} className={styles.AuthWizardStep}>
                    <WelcomeStep email={email} onEmailEnter={setEmail} />
                </Wizard.Step>

                <Wizard.Step id={AuthWizardStepIds.LOG_IN} nextStepId={null} className={styles.AuthWizardStep}>
                    <LogInStep email={email} onEmailEnter={setEmail} />
                </Wizard.Step>

                <Wizard.Step id={AuthWizardStepIds.SIGN_UP} nextStepId={null} className={styles.AuthWizardStep}>
                    <SignUpStep email={email} onEmailEnter={setEmail} />
                </Wizard.Step>
            </Group>

            <AuthWizardFooter />
        </Wizard.Root>
    );
};
