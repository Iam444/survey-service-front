import { PreviewCard } from '@base-ui/react/preview-card';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './PreviewCardPopup.module.scss';
import type { FC } from 'react';
import type { TPreviewCardPopupProps } from './PreviewCardPopup.props';

export const PreviewCardPopup: FC<TPreviewCardPopupProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.PreviewCardPopup, className);

    return <PreviewCard.Popup className={finalClassName} {...props} />;
};
