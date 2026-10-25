import type { ReactNode, HTMLAttributes } from 'react';

export interface IExpandableListProps<T extends object> extends Omit<HTMLAttributes<HTMLUListElement>, 'children'> {
    initialListLength?: number;
    lengthLimitSensitivity?: number;
    items: T[];
    className?: string;
    children: (item: T) => ReactNode;
}
