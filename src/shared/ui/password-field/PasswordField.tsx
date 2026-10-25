import { useState } from 'react';
import { Field, REQUIRED_FIELD_RULE } from '@/shared/ui/field';
import { TextInput } from '@/shared/ui/text-input';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import styles from './PasswordField.module.scss';
import { PasswordFieldValidators, PASSWORD_MIN_LENGTH_RULE, PASSWORD_MIN_LENGTH } from './constants';
import type { FC } from 'react';
import type { IPasswordFieldProps } from './PasswordField.props';

export const PasswordField: FC<IPasswordFieldProps> = ({ isInvalid = false, passwordValue, onPasswordValueChange }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const visibilityToggler = (
        <Button
            variant="iconOnly"
            size="small"
            className={styles.PasswordFieldVisibilityToggler}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
        >
            <Icon name={isPasswordVisible ? 'visible' : 'hidden'} size="medium" iconColor={isPasswordVisible ? 'primary' : 'strong'} />
        </Button>
    );

    return (
        <Field.Root validators={PasswordFieldValidators} isRequired>
            <Field.Label>Пароль</Field.Label>

            <Field.Control value={passwordValue} onValueChange={onPasswordValueChange}>
                <TextInput
                    placeholder="Пароль"
                    type={isPasswordVisible ? 'text' : 'password'}
                    maxLength={64}
                    isInvalid={isInvalid}
                    rightStructure={visibilityToggler}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === 'Escape') && e.currentTarget.blur()}
                    className={styles.PasswordFieldInput}
                />
            </Field.Control>

            {<Field.InvalidityMessage rule={REQUIRED_FIELD_RULE}>Пароль обязателен для заполнения</Field.InvalidityMessage>}

            <Field.InvalidityMessage
                rule={PASSWORD_MIN_LENGTH_RULE}
            >{`Пароль должен содержать не менее ${PASSWORD_MIN_LENGTH} символов`}</Field.InvalidityMessage>
        </Field.Root>
    );
};
