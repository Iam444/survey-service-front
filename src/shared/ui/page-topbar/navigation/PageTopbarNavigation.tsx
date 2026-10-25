import { joinStyles } from '@/shared/lib/join-styles';
import styles from './PageTopbarNavigation.module.scss';
import type { FC } from 'react';
import type { TPageTopbarNavigationProps } from './PageTopbarNavigation.props';

export const PageTopbarNavigation: FC<TPageTopbarNavigationProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.PageTopbarNavigation, className);

    return (
        <div className={finalClassName} {...props}>
            {children}
        </div>
    );
};
