import { joinStyles } from '@/shared/lib/join-styles';
import styles from './PageTopbarContent.module.scss';
import type { FC } from 'react';
import type { TPageTopbarContentProps } from './PageTopbarContent.props';

export const PageTopbarContent: FC<TPageTopbarContentProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.PageTopbarContent, className);

    return (
        <div className={finalClassName} {...props}>
            {children}
        </div>
    );
};
