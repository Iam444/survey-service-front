import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { useWizard } from '@/shared/ui/wizard';
import { useEmailField } from '@/shared/ui/email-field/hooks';
import { EmailField } from '@/shared/ui/email-field';
import { PasswordField, usePasswordField } from '@/shared/ui/password-field';
import { Typography } from '@/shared/ui/typography';
import { Group } from '@/shared/ui/group';
import { useLogIn } from '../../model/hooks/use-log-in';
import type { FC } from 'react';
import type { IFieldValue } from '@/shared/ui/field';
import type { ILogInStepProps } from './LogInStep.props';

export const LogInStep: FC<ILogInStepProps> = ({ email, onEmailEnter }) => {
    const { emailValue, onEmailValueChange } = useEmailField({ initialEmailValue: email, onEmailEnter, debounceDelayMS: 600 });
    const { isPasswordValid, passwordValue, onPasswordValueChange } = usePasswordField({
        initialPasswordValue: '',
        debounceDelayMS: 600,
    });

    const [hasError, setHasError] = useState(false);

    const { proceedNextStep } = useWizard();
    const { mutate, isPending } = useLogIn(() => setHasError(true));

    const handleEmailValueChange = (value: IFieldValue, isValid: boolean): void => {
        onEmailValueChange(value, isValid);
        setHasError(false);
    };

    const handlePasswordValueChange = (value: IFieldValue, isValid: boolean): void => {
        onPasswordValueChange(value, isValid);
        setHasError(false);
    };

    const handleLogInButtonClick = (): void => {
        mutate(
            { email: emailValue.trim(), password: passwordValue },
            {
                onSuccess: () => proceedNextStep(),
            },
        );
    };

    const isStemCompleted = email === emailValue.trim() && isPasswordValid;

    return (
        <>
            <EmailField isInvalid={hasError} isRequired emailValue={emailValue} onEmailValueChange={handleEmailValueChange} />

            <PasswordField isInvalid={hasError} passwordValue={passwordValue} onPasswordValueChange={handlePasswordValueChange} />

            <Group direction="column" gap="8">
                <Button variant="solid" size="medium" disabled={!isStemCompleted} isLoading={isPending} onClick={handleLogInButtonClick}>
                    Войти
                </Button>

                {hasError && (
                    <Typography type="text" size="small" color="danger" align="center">
                        Неверный email или пароль
                    </Typography>
                )}
            </Group>
        </>
    );
};
