import type { HTMLAttributes } from 'react';

export interface ITableRowCellProps extends HTMLAttributes<HTMLDivElement> {
    isSticky?: boolean;
    minWidth: string;
    maxWidth?: string;
}
