import { Skeleton } from '@/shared/ui/skeleton';
import styles from './PollStatusBlock.module.scss';
import type { FC } from 'react';

export const PollStatusBlockSkeleton: FC = () => {
    return (
        <div className={styles.PollStatusBlock}>
            <Skeleton fit="title-extraLarge" width="60%" />
            <Skeleton fit="title-extraSmall" width="45%" />
        </div>
    );
};
