import { joinStyles } from '@/shared/lib/join-styles';
import styles from './LabeledRow.module.scss';
import type { FC, ReactElement } from 'react';

export const LabeledRowSkeleton: FC<{
    shouldAlignTop?: boolean;
    label: ReactElement;
    content: ReactElement;
}> = ({ shouldAlignTop = false, label, content }) => {
    const finalClassName = joinStyles(styles.LabeledRow, shouldAlignTop && styles.alignTop);

    return (
        <div className={finalClassName}>
            <div className={styles.LabeledRowLabel}>{label}</div>
            {content}
        </div>
    );
};
