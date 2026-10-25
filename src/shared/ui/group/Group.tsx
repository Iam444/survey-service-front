import { joinStyles } from '@/shared/lib/join-styles';
import styles from './Group.module.scss';
import type { FC } from 'react';
import type { IGroupProps } from './Group.props';

export const Group: FC<IGroupProps> = ({ direction, justify, align, gap, flex, wrap, className, children, ...props }) => {
    const finalClassName = joinStyles(
        styles.Group,
        direction && styles[`direction-${direction}`],
        justify && styles[`justify-${justify}`],
        align && styles[`align-${align}`],
        gap && styles[`gap-${gap}`],
        flex && styles[`flex-${flex}`],
        wrap && styles[`wrap-${wrap}`],
        className,
    );

    return (
        <div className={finalClassName} {...props}>
            {children}
        </div>
    );
};
