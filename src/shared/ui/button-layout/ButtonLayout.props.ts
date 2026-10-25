import type { ReactElement } from 'react';
import type { TButtonLayoutVariant, TButtonLayoutSize } from './types';

export interface IButtonLayoutProps {
    variant: TButtonLayoutVariant;
    size: TButtonLayoutSize;
    isRounded?: boolean | undefined;
    className?: string;
    children: ReactElement<IButtonLayoutChildProps>;
}

interface IButtonLayoutChildProps {
    className?: string | undefined;
}
