import { checkIfEmailValid } from '@/shared/lib/check-if-email-valid';
import type { IFieldValidator, IFieldValue } from '@/shared/ui/field';

export const EMAIL_PATTERN = 'example@email.com';
export const EMAIL_PATTERN_RULE = 'EMAIL_PATTERN';
export const EmailFieldValidators: IFieldValidator[] = [
    {
        rule: EMAIL_PATTERN_RULE,
        checkIfValid: (value: IFieldValue) => checkIfEmailValid(value.trimmed),
    },
] as const;
