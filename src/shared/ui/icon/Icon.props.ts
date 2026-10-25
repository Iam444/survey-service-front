import type { SVGProps } from 'react';
import type { TIconName, TIconSize, TRotation, TColor } from './types';

export interface IIconProps extends SVGProps<SVGSVGElement> {
    name: TIconName;
    size: TIconSize;
    iconColor?: TColor | undefined;
    rotation?: TRotation | undefined;
}
