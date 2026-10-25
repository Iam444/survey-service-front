import { joinStyles } from '@/shared/lib/join-styles';
import styles from './TableRoot.module.scss';
import type { FC } from 'react';
import type { TTableRootProps } from './TableRoot.props';

export const TableRoot: FC<TTableRootProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.Table, className);

    return (
        <div className={finalClassName} {...props}>
            {children}
        </div>
    );
};
