import { Group } from '@/shared/ui/group';
import { Skeleton } from '@/shared/ui/skeleton';
import styles from './PollInfoPanel.module.scss';
import { LabeledRowSkeleton } from './parts/LabeledRow.skeleton';
import type { FC } from 'react';

export const PollInfoPanelSkeleton: FC = () => {
    return (
        <div className={styles.PollInfoPanel}>
            <Group direction="column" gap="24" className={styles.PollInfoPanelGeneralData}>
                <Skeleton fit="title-medium" width="130px" />

                <Group direction="column" gap="8">
                    <LabeledRowSkeleton label={<Skeleton fit="text-small" width="55px" />} content={<Skeleton fit="text-small" width="100px" />} />

                    <LabeledRowSkeleton label={<Skeleton fit="text-small" width="60px" />} content={<Skeleton fit="text-small" width="60px" />} />

                    <LabeledRowSkeleton label={<Skeleton fit="text-small" width="50px" />} content={<Skeleton fit="text-small" width="140px" />} />
                </Group>
            </Group>

            <Group direction="column" gap="24" className={styles.PollInfoPanelSettings}>
                <Skeleton fit="title-medium" width="160px" />

                <Group direction="column" gap="8" align="start">
                    <LabeledRowSkeleton label={<Skeleton fit="text-small" width="50px" />} content={<Skeleton fit="text-small" width="100px" />} />

                    <LabeledRowSkeleton
                        shouldAlignTop
                        label={<Skeleton fit="text-small" width="70px" />}
                        content={<Skeleton fit="text-small" width="120px" />}
                    />

                    <LabeledRowSkeleton
                        shouldAlignTop
                        label={<Skeleton fit="text-small" width="120px" />}
                        content={<Skeleton fit="text-small" width="160px" />}
                    />
                </Group>
            </Group>
        </div>
    );
};
