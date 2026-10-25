import { Children, cloneElement } from 'react';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './ButtonLayout.module.scss';
import type { FC } from 'react';
import type { IButtonLayoutProps } from './ButtonLayout.props';

export const ButtonLayout: FC<IButtonLayoutProps> = ({ variant, size, isRounded = false, className, children }) => {
    const child = Children.only(children);

    const finalClassName = joinStyles(
        styles.Button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        isRounded && styles.rounded,
        className,
        child.props.className,
    );

    return cloneElement(child, {
        className: finalClassName,
    });
};
