import { useState, useMemo } from 'react';
import { debounce } from '@/shared/lib/debounce';
import type { IFieldValue } from '@/shared/ui/field';

interface IUsePasswordFieldParams {
    debounceDelayMS?: number;
    initialPasswordValue: string;
    onPasswordEnter?: (password: string) => void;
}

interface IUsePasswordFieldReturn {
    isPasswordValid: boolean;
    passwordValue: string;
    onPasswordValueChange: (value: IFieldValue, isValid: boolean) => void;
}

export const usePasswordField = ({ debounceDelayMS, initialPasswordValue, onPasswordEnter }: IUsePasswordFieldParams): IUsePasswordFieldReturn => {
    const [passwordValue, setPasswordValue] = useState(initialPasswordValue);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const onPasswordEnterDebounced = useMemo(
        () => debounce((email: string) => onPasswordEnter?.(email), debounceDelayMS || 500),
        [onPasswordEnter, debounceDelayMS],
    );

    const handlePasswordValueChange = (value: IFieldValue, isValid: boolean): void => {
        setPasswordValue(value.raw);
        setIsPasswordValid(isValid);

        if (onPasswordEnter && isValid) {
            if (debounceDelayMS) {
                onPasswordEnterDebounced(value.trimmed);
            } else {
                onPasswordEnter(value.trimmed);
            }
        }
    };

    return {
        isPasswordValid,
        passwordValue,
        onPasswordValueChange: handlePasswordValueChange,
    };
};
