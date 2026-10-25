import type { HTMLAttributes } from 'react';
import type { TFitOptions } from './types';

export interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {
    fit?: TFitOptions;
    width?: string;
}
