import type { TextareaHTMLAttributes } from 'react';

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    rows: number;
    maxRows: number;
    isInvalid?: boolean;
    wrapperClassName?: string;
}
