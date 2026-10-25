import { useParams, Navigate } from 'react-router-dom';
import { SurveyServicePathTree, PagesMap } from '@/shared/config/routes';
import { PollResults } from '@/widgets/survey-poll-results';
import { PollStatusBlock } from '@/widgets/survey-poll-status-block';
import styles from './PollResultsPage.module.scss';
import type { FC } from 'react';

export const PollResultsPage: FC = () => {
    const { [SurveyServicePathTree.Root.Polls.Poll.getParams().POLL_ID]: pollId } = useParams();

    if (!pollId) {
        return <Navigate to={PagesMap.Polls.getRoute()} replace />;
    }

    return (
        <div className={styles.PollResultsPage}>
            <PollStatusBlock pollId={pollId} />

            <PollResults pollId={pollId} />
        </div>
    );
};
