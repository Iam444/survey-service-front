import { Combobox } from '@base-ui/react/combobox';
import type { FC } from 'react';
import type { TComboboxPositionerProps } from './ComboboxPositioner.props';

export const ComboboxPositioner: FC<TComboboxPositionerProps> = ({ side = 'bottom', align = 'start', ...props }) => {
    return <Combobox.Positioner side={side} align={align} {...props} />;
};
