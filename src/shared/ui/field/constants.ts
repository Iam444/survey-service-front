import type { IFieldValidator, IFieldValue } from '@/shared/ui/field/types';

export const REQUIRED_FIELD_RULE = 'REQUIRED_FIELD';

export const RequiredFieldValidator: IFieldValidator = {
    rule: REQUIRED_FIELD_RULE,
    checkIfValid: (value: IFieldValue) => value.raw !== '',
};
