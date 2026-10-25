import type { HTMLAttributes } from 'react';
import type { TLoadingIndicatorSize } from './types';

export interface ILoadingIndicatorProps extends HTMLAttributes<HTMLDivElement> {
    size: TLoadingIndicatorSize;
}
