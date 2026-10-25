import type { IFieldValidator, IFieldValue } from '@/shared/ui/field';

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MIN_LENGTH_RULE = 'PASSWORD_MIN_LENGTH';
export const PasswordFieldValidators: IFieldValidator[] = [
    {
        rule: PASSWORD_MIN_LENGTH_RULE,
        checkIfValid: (value: IFieldValue) => value.raw.length >= PASSWORD_MIN_LENGTH,
    },
] as const;
