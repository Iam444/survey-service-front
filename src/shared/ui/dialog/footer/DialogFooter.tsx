import { joinStyles } from '@/shared/lib/join-styles';
import styles from './DialogFooter.module.scss';
import type { FC } from 'react';
import type { TDialogFooterProps } from './DialogFooter.props';

export const DialogFooter: FC<TDialogFooterProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.DialogFooter, className);

    return (
        <div className={finalClassName} {...props}>
            {children}
        </div>
    );
};
