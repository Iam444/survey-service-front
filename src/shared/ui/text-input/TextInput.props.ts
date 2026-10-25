import type { Ref, InputHTMLAttributes, ReactElement } from 'react';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    ref?: Ref<HTMLInputElement>;
    leftStructure?: ReactElement | undefined;
    rightStructure?: ReactElement | undefined;
    isInvalid?: boolean;
    type?: Exclude<InputHTMLAttributes<HTMLInputElement>['type'], 'checkbox'>;
    wrapperClassName?: string;
}
