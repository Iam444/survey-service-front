import { joinStyles } from '@/shared/lib/join-styles';
import styles from './TableRow.module.scss';
import type { FC } from 'react';
import type { TTableRowProps } from './TableRow.props';

export const TableRow: FC<TTableRowProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.TableRow, className);

    return (
        <div className={finalClassName} {...props}>
            {children}
        </div>
    );
};
