import { Dialog } from '@base-ui/react/dialog';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './DialogBackdrop.module.scss';
import type { FC } from 'react';
import type { TDialogBackdropProps } from './DialogBackdrop.props';

export const DialogBackdrop: FC<TDialogBackdropProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.DialogBackdrop, className);

    return <Dialog.Backdrop className={finalClassName} {...props} />;
};
