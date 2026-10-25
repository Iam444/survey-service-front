import { cloneElement, Children, useState } from 'react';
import { useField } from '@/shared/ui/field/context';
import type { FocusEvent, FC, ChangeEvent } from 'react';
import type { IFieldControlProps } from './FieldControl.props';

export const FieldControl: FC<IFieldControlProps> = ({ value: controlledValue, defaultValue = '', onValueEnter, onValueChange, children }) => {
    const { controlId: id, isValid, validate, resetValidation, checkIfValid } = useField();

    const [value, setValue] = useState(defaultValue);

    const child = Children.only(children);

    const isInvalid = child.props.isInvalid || !isValid;

    const handleControlChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const fieldValue = { raw: e.target.value, trimmed: e.target.value.trim() };
        const isValid = checkIfValid(fieldValue);

        setValue(fieldValue.raw);

        onValueChange?.(fieldValue, isValid);
        child.props.onChange?.(e);
    };

    const handleControlFocus = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        resetValidation();

        child.props.onFocus?.(e);
    };

    const handleControlBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const fieldValue = { raw: e.target.value, trimmed: e.target.value.trim() };
        const isValid = checkIfValid(fieldValue);

        validate(fieldValue);

        onValueEnter?.(fieldValue, isValid);
        child.props.onBlur?.(e);
    };

    return cloneElement(child, {
        ...child.props,
        id,
        isInvalid,
        value: controlledValue === undefined ? value : controlledValue,
        onChange: handleControlChange,
        onFocus: handleControlFocus,
        onBlur: handleControlBlur,
    });
};
