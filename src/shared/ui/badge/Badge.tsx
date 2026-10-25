import { joinStyles } from '@/shared/lib/join-styles';
import styles from './Badge.module.scss';
import type { FC } from 'react';
import type { IStatusBadgeProps } from './Badge.props';

export const Badge: FC<IStatusBadgeProps> = ({ size, className, children, ...props }) => {
    const finalClassName = joinStyles(styles.Badge, styles[`size-${size}`], className);

    return (
        <div className={finalClassName} {...props}>
            {children}
        </div>
    );
};
