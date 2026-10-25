import { useState } from 'react';
import { TextInput } from '@/shared/ui/text-input';
import { Button } from '@/shared/ui/button';
import { useWizard } from '@/shared/ui/wizard';
import { Field, REQUIRED_FIELD_RULE } from '@/shared/ui/field';
import { PasswordField, usePasswordField } from '@/shared/ui/password-field';
import { EmailField, useEmailField } from '@/shared/ui/email-field';
import { Group } from '@/shared/ui/group';
import { Typography } from '@/shared/ui/typography';
import { UserNameFieldValidators, USER_NAME_MIN_LENGTH_RULE, USER_NAME_MIN_LENGTH } from '../../model/constants/user-name-field-validators';
import { useSignUp } from '../../model/hooks/use-sign-up';
import type { FC } from 'react';
import type { IFieldValue } from '@/shared/ui/field';
import type { ISignUpStepProps } from './SignUpStep.props';

export const SignUpStep: FC<ISignUpStepProps> = ({ email, onEmailEnter }) => {
    const { emailValue, onEmailValueChange } = useEmailField({ initialEmailValue: email, onEmailEnter, debounceDelayMS: 600 });
    const { isPasswordValid, passwordValue, onPasswordValueChange } = usePasswordField({
        initialPasswordValue: '',
        debounceDelayMS: 600,
    });

    const [nameValue, setNameValue] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [surnameValue, setSurnameValue] = useState('');
    const [hasError, setHasError] = useState(false);

    const { proceedNextStep } = useWizard();
    const { mutate, isPending } = useSignUp(() => setHasError(true));

    const handleEmailValueChange = (value: IFieldValue, isValid: boolean): void => {
        onEmailValueChange(value, isValid);
        setHasError(false);
    };

    const handlePasswordValueChange = (value: IFieldValue, isValid: boolean): void => {
        onPasswordValueChange(value, isValid);
        setHasError(false);
    };

    const handleNameValueChange = (value: IFieldValue, isValid: boolean): void => {
        setNameValue(value.raw);
        setIsNameValid(isValid);
        setHasError(false);
    };

    const handleSurnameValueChange = (value: IFieldValue): void => {
        setSurnameValue(value.raw);
        setHasError(false);
    };

    const handleSignUpButtonClick = (): void => {
        mutate(
            { email: emailValue.trim(), password: passwordValue, name: nameValue.trim(), surname: surnameValue.trim() || null },
            {
                onSuccess: () => proceedNextStep(),
                onError: () => setHasError(true),
            },
        );
    };

    const isStemCompleted = email === emailValue.trim() && isPasswordValid && isNameValid;

    return (
        <>
            <EmailField isInvalid={hasError} isRequired emailValue={emailValue} onEmailValueChange={handleEmailValueChange} />

            <PasswordField isInvalid={hasError} passwordValue={passwordValue} onPasswordValueChange={handlePasswordValueChange} />

            <Field.Root validators={UserNameFieldValidators} isRequired>
                <Field.Label>Имя</Field.Label>

                <Field.Control value={nameValue} onValueChange={handleNameValueChange}>
                    <TextInput maxLength={20} placeholder="Имя" isInvalid={hasError} />
                </Field.Control>

                <Field.InvalidityMessage rule={REQUIRED_FIELD_RULE}>Имя обязательно для заполнения</Field.InvalidityMessage>

                <Field.InvalidityMessage
                    rule={USER_NAME_MIN_LENGTH_RULE}
                >{`Имя должно быть от ${USER_NAME_MIN_LENGTH} символов`}</Field.InvalidityMessage>
            </Field.Root>

            <Field.Root>
                <Field.Label>Фамилия</Field.Label>

                <Field.Control value={surnameValue} onValueChange={handleSurnameValueChange}>
                    <TextInput maxLength={30} placeholder="Фамилия" isInvalid={hasError} />
                </Field.Control>
            </Field.Root>

            <Group direction="column" gap="8">
                <Button variant="solid" size="medium" disabled={!isStemCompleted} isLoading={isPending} onClick={handleSignUpButtonClick}>
                    Зарегистрироваться
                </Button>

                {hasError && (
                    <Typography type="text" size="small" color="danger" align="center">
                        Эта почта уже используется
                    </Typography>
                )}
            </Group>
        </>
    );
};
