import { joinStyles } from '@/shared/lib/join-styles';
import styles from './TableBody.module.scss';
import type { FC } from 'react';
import type { TTableBodyProps } from './TableBody.props';

export const TableBody: FC<TTableBodyProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.TableBody, className);

    return (
        <div className={finalClassName} {...props}>
            {children}
        </div>
    );
};
