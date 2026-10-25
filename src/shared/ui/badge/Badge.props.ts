import type { HTMLAttributes } from 'react';
import type { TBadgeSize } from './types';

export interface IStatusBadgeProps extends HTMLAttributes<HTMLDivElement> {
    size: TBadgeSize;
}
