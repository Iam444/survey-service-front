import { joinStyles } from '@/shared/lib/join-styles';
import styles from './Icon.module.scss';
import { IconRegistry } from './constants';
import type { FC } from 'react';
import type { IIconProps } from './Icon.props';

export const Icon: FC<IIconProps> = ({ name, size, iconColor: color, rotation, className, ...props }) => {
    const SVGIcon = IconRegistry[name];

    const finalClassName = joinStyles(
        styles.Icon,
        styles[`size-${size}`],
        color && styles[`color-${color}`],
        rotation && styles[`rotation-${rotation}`],
        className,
    );

    return <SVGIcon className={finalClassName} {...props} />;
};
