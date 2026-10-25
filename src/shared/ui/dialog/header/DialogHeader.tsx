import { joinStyles } from '@/shared/lib/join-styles';
import styles from './DialogHeader.module.scss';
import type { FC } from 'react';
import type { TDialogHeaderProps } from './DialogHeader.props';

export const DialogHeader: FC<TDialogHeaderProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.DialogHeader, className);

    return (
        <div className={finalClassName} {...props}>
            {children}
        </div>
    );
};
