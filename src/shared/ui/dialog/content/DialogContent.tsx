import { joinStyles } from '@/shared/lib/join-styles';
import styles from './DialogContent.module.scss';
import type { FC } from 'react';
import type { TDialogContentProps } from './DialogContent.props';

export const DialogContent: FC<TDialogContentProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.DialogContent, className);

    return (
        <div className={styles.DialogContentWrapper}>
            <div className={finalClassName} {...props}>
                {children}
            </div>
        </div>
    );
};
