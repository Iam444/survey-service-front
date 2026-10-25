import type { IFieldControlProps } from '@/shared/ui/field';

export interface IPasswordFieldProps {
    isInvalid?: boolean;
    passwordValue: string;
    onPasswordValueChange: IFieldControlProps['onValueChange'];
}
