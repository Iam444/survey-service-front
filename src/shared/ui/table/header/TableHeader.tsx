import { joinStyles } from '@/shared/lib/join-styles';
import styles from './TableHeader.module.scss';
import type { FC } from 'react';
import type { TTableHeaderProps } from './TableHeader.props';

export const TableHeader: FC<TTableHeaderProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.TableHeader, className);

    return (
        <div className={finalClassName} {...props}>
            {children}
        </div>
    );
};
