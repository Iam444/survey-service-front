import type { IFieldValidator, IFieldValue } from '@/shared/ui/field';

export const USER_NAME_MIN_LENGTH = 2;
export const USER_NAME_MIN_LENGTH_RULE = 'USER_NAME_MIN_LENGTH';
export const UserNameFieldValidators: IFieldValidator[] = [
    {
        rule: USER_NAME_MIN_LENGTH_RULE,
        checkIfValid: (value: IFieldValue) => value.trimmed.length >= USER_NAME_MIN_LENGTH,
    },
] as const;
