import { useParams, Navigate } from 'react-router-dom';
import { PagesMap, SurveyServicePathTree } from '@/shared/config/routes';
import { Poll } from '@/widgets/survey-poll';
import { PollStatusBlock } from '@/widgets/survey-poll-status-block';
import styles from './PollOverviewPage.module.scss';
import type { FC } from 'react';

export const PollOverviewPage: FC = () => {
    const { [SurveyServicePathTree.Root.Polls.Poll.getParams().POLL_ID]: pollId } = useParams();

    if (!pollId) {
        return <Navigate to={PagesMap.Polls.getRoute()} replace />;
    }

    return (
        <div className={styles.PollOverviewPage}>
            <PollStatusBlock pollId={pollId} />

            <Poll id={pollId} />
        </div>
    );
};
