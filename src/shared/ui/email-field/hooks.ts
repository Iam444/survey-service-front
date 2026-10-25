import { useState, useMemo } from 'react';
import { debounce } from '@/shared/lib/debounce';
import type { IFieldValue } from '@/shared/ui/field';

interface IUseEmailFieldParams {
    debounceDelayMS?: number;
    initialEmailValue: string;
    onEmailEnter?: (email: string) => void;
}

interface IUseEmailFieldReturn {
    isEmailValid: boolean;
    emailValue: string;
    onEmailValueChange: (value: IFieldValue, isValid: boolean) => void;
}

export const useEmailField = ({ debounceDelayMS, initialEmailValue, onEmailEnter }: IUseEmailFieldParams): IUseEmailFieldReturn => {
    const [emailValue, setEmailValue] = useState(initialEmailValue);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const onEmailEnterDebounced = useMemo(
        () => debounce((email: string) => onEmailEnter?.(email), debounceDelayMS || 500),
        [onEmailEnter, debounceDelayMS],
    );

    const handleEmailValueChange = (value: IFieldValue, isValid: boolean): void => {
        setEmailValue(value.raw);
        setIsEmailValid(isValid);

        if (onEmailEnter && isValid) {
            if (debounceDelayMS) {
                onEmailEnterDebounced(value.trimmed);
            } else {
                onEmailEnter(value.trimmed);
            }
        }
    };

    return {
        isEmailValid,
        emailValue,
        onEmailValueChange: handleEmailValueChange,
    };
};
