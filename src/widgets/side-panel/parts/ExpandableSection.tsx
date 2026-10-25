import { Icon } from '@/shared/ui/icon';
import { Typography } from '@/shared/ui/typography';
import styles from './ExpandableSection.module.scss';
import type { FC } from 'react';
import type { IExpandableSectionProps } from './ExpandableSection.props';

export const ExpandableSection: FC<IExpandableSectionProps> = ({ label }) => {
    return (
        <div className={styles.ExpandableSection} style={{ cursor: 'not-allowed' }}>
            <Icon name="caret" size="extraSmall" iconColor="strong" rotation={'270'} />

            <Typography type="text" size="small" color="weak" weight="medium" useTruncation>
                {label}
            </Typography>
        </div>
    );
};
