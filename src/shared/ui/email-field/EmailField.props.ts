import type { IFieldValue, IFieldRootProps } from '@/shared/ui/field';

export interface IEmailFieldProps {
    isInvalid?: boolean;
    isRequired?: IFieldRootProps['isRequired'];
    emailValue: string;
    onEmailValueChange: (value: IFieldValue, isValid: boolean) => void;
}
