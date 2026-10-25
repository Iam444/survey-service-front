import { Menu } from '@base-ui/react/menu';
import type { FC } from 'react';
import type { TMenuPositionerProps } from './MenuPositioner.props';

export const MenuPositioner: FC<TMenuPositionerProps> = ({ side = 'bottom', align = 'start', ...props }) => {
    return <Menu.Positioner side={side} align={align} {...props} />;
};
