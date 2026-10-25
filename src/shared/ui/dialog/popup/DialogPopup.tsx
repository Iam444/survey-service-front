import { Dialog } from '@base-ui/react/dialog';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './DialogPopup.module.scss';
import type { FC } from 'react';
import type { IDialogPopupProps } from './DialogPopup.props';

export const DialogPopup: FC<IDialogPopupProps> = ({ size, className, ...props }) => {
    const finalClassName = joinStyles(styles.DialogPopup, styles[`size-${size}`], className);

    return <Dialog.Popup className={finalClassName} {...props} />;
};
