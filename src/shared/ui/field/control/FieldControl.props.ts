import type { ReactElement, FocusEventHandler, ChangeEventHandler } from 'react';
import type { ITextInputProps } from '@/shared/ui/text-input';
import type { ITextareaProps } from '@/shared/ui/textarea';
import type { IFieldValue } from '../types';

export interface IFieldControlProps {
    defaultValue?: (ITextInputProps | ITextareaProps)['value'];
    value?: (ITextInputProps | ITextareaProps)['value'];
    onValueEnter?: (fieldValue: IFieldValue, isValid: boolean) => void;
    onValueChange?: ((fieldValue: IFieldValue, isValid: boolean) => void) | undefined;
    children: ReactElement<IFieldControlChildProps>;
}

interface IFieldControlChildProps extends Pick<ITextInputProps | ITextareaProps, 'id' | 'isInvalid' | 'value'> {
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onFocus: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
