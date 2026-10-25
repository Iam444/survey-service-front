import { joinStyles } from '@/shared/lib/join-styles';
import styles from './TableHeaderColumn.module.scss';
import type { FC, CSSProperties } from 'react';
import type { ITableHeaderColumnProps } from './TableHeaderColumn.props';

export const TableHeaderColumn: FC<ITableHeaderColumnProps> = ({ isSticky = false, minWidth, maxWidth, className, children, ...props }) => {
    const finalClassName = joinStyles(styles.TableHeaderColumn, isSticky && styles.sticky, className);

    const headerColumnMinWidthCSSStyle = { '--header-column-min-width': minWidth } as CSSProperties;

    return (
        <div className={finalClassName} style={{ maxWidth, ...headerColumnMinWidthCSSStyle }} {...props}>
            {children}
        </div>
    );
};
