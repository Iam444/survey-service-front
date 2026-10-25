import type { HTMLAttributes } from 'react';

export interface ITableHeaderColumnProps extends HTMLAttributes<HTMLDivElement> {
    isSticky?: boolean;
    minWidth: string;
    maxWidth?: string;
}
