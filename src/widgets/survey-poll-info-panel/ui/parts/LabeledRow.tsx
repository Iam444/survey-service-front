import { Typography } from '@/shared/ui/typography';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './LabeledRow.module.scss';
import type { FC } from 'react';
import type { ILabeledRowProps } from './LabeledRow.props';

export const LabeledRow: FC<ILabeledRowProps> = ({ shouldAlignTop = false, label, children }) => {
    const finalClassName = joinStyles(styles.LabeledRow, shouldAlignTop && styles.alignTop);

    return (
        <div className={finalClassName}>
            <div className={styles.LabeledRowLabel}>
                <Typography type="text" size="medium" color="weak" weight="medium">
                    {label}
                </Typography>
            </div>

            {children}
        </div>
    );
};
