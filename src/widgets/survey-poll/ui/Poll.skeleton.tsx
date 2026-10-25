import { Group } from '@/shared/ui/group';
import { Skeleton } from '@/shared/ui/skeleton';
import styles from './Poll.module.scss';
import type { FC } from 'react';

export const PollSkeleton: FC = () => {
    return (
        <div className={styles.Poll}>
            <Group gap="18" justify="between" className={styles.PollHeader}>
                <Skeleton fit="title-medium" width="60%" />
            </Group>

            <Group gap="24" direction="column" className={styles.PollContent}>
                <Group direction="column" gap="4">
                    <Skeleton width="95%" fit="text-small" />
                    <Skeleton width="90%" fit="text-small" />
                    <Skeleton width="40%" fit="text-small" />
                </Group>

                <div className={styles.PollOptionsList}>
                    <Skeleton className={styles.PollOptionSkeleton} />
                    <Skeleton className={styles.PollOptionSkeleton} />
                </div>
            </Group>
        </div>
    );
};
