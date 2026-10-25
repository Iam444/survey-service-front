import { PollList } from '@/widgets/survey-poll-list';
import styles from './PollListPage.module.scss';
import type { FC } from 'react';

export const PollListPage: FC = () => {
    return (
        <div className={styles.PollListPage}>
            <PollList />
        </div>
    );
};
