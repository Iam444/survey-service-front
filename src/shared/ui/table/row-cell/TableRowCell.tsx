import { joinStyles } from '@/shared/lib/join-styles';
import styles from './TableRowCell.module.scss';
import type { FC, CSSProperties } from 'react';
import type { ITableRowCellProps } from './TableRowCell.props';

export const TableRowCell: FC<ITableRowCellProps> = ({ isSticky = false, minWidth, maxWidth, className, children, ...props }) => {
    const finalClassName = joinStyles(styles.TableRowCell, isSticky && styles.sticky, className);

    const cellMinWidthCSSStyle = { '--cell-min-width': minWidth } as CSSProperties;

    return (
        <div className={finalClassName} style={{ maxWidth, ...cellMinWidthCSSStyle }} {...props}>
            {children}
        </div>
    );
};
