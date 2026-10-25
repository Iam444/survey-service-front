import { Field, REQUIRED_FIELD_RULE } from '@/shared/ui/field';
import { TextInput } from '@/shared/ui/text-input';
import { EmailFieldValidators, EMAIL_PATTERN_RULE, EMAIL_PATTERN } from './constants';
import type { FC } from 'react';
import type { IEmailFieldProps } from './EmailField.props';

export const EmailField: FC<IEmailFieldProps> = ({ isInvalid = false, isRequired, emailValue, onEmailValueChange }) => {
    return (
        <Field.Root validators={EmailFieldValidators} isRequired={isRequired}>
            <Field.Label>Email</Field.Label>

            <Field.Control value={emailValue} onValueChange={onEmailValueChange}>
                <TextInput
                    placeholder="Электронная почта"
                    type="email"
                    maxLength={100}
                    isInvalid={isInvalid}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === 'Escape') && e.currentTarget.blur()}
                />
            </Field.Control>

            {isRequired && <Field.InvalidityMessage rule={REQUIRED_FIELD_RULE}>Email обязателен для заполнения</Field.InvalidityMessage>}

            <Field.InvalidityMessage rule={EMAIL_PATTERN_RULE}>{`Введите email в формате ${EMAIL_PATTERN}`}</Field.InvalidityMessage>
        </Field.Root>
    );
};
