import { Outlet, useParams, Navigate } from 'react-router-dom';
import { Group } from '@/shared/ui/group';
import { PagesMap, SurveyServicePathTree } from '@/shared/config/routes';
import { PollInfoPanel } from '@/widgets/survey-poll-info-panel';
import { PollPageTopbar } from '@/widgets/survey-poll-page-topbar';
import styles from './SurveyPollPageLayout.module.scss';
import type { FC } from 'react';

export const SurveyPollPageLayout: FC = () => {
    const { [SurveyServicePathTree.Root.Polls.Poll.getParams().POLL_ID]: pollId } = useParams();

    if (!pollId) {
        return <Navigate to={PagesMap.Polls.getRoute()} replace />;
    }

    return (
        <>
            <PollPageTopbar pollId={pollId} />

            <Group flex="1" className={styles.SurveyPollPageLayoutMain}>
                <Outlet />

                <PollInfoPanel pollId={pollId} />
            </Group>
        </>
    );
};
