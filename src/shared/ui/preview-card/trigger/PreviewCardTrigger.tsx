import { PreviewCard } from '@base-ui/react/preview-card';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './PreviewCardTrigger.module.scss';
import type { FC } from 'react';
import type { TPreviewCardPTriggerProps } from './PreviewCardTrigger.props';

export const PreviewCardTrigger: FC<TPreviewCardPTriggerProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.PreviewCardTrigger, className);

    return <PreviewCard.Trigger className={finalClassName} {...props} />;
};
