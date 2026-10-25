import type { SVGProps } from 'react';
import type { TLogoSize } from './types';

export interface ILogoProps extends SVGProps<SVGSVGElement> {
    size: TLogoSize;
}
