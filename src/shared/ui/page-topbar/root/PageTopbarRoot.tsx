import { joinStyles } from '@/shared/lib/join-styles';
import styles from './PageTopbarRoot.module.scss';
import type { FC } from 'react';
import type { TPageTopbarRootProps } from './PageTopbarRoot.props';

export const PageTopbarRoot: FC<TPageTopbarRootProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.PageTopbar, className);

    return (
        <div className={finalClassName} {...props}>
            {children}
        </div>
    );
};
