import { useNavigate } from 'react-router-dom';
import { useBackgroundPage } from '@/shared/lib/use-background-page';
import { PagesMap } from '@/shared/config/routes';
import { PollCreationWizard } from '@/widgets/survey-poll-creation-wizard';
import styles from './PollCreationPage.module.scss';
import type { FC } from 'react';

export const PollCreationPage: FC = () => {
    const { closeOverlay } = useBackgroundPage();
    const navigate = useNavigate();

    const handlePollCreationCancel = (): void => {
        const defaultPage = PagesMap.Polls.getRoute();

        closeOverlay(defaultPage);
    };

    const handlePollCreate = (createdPollId: string): void => {
        const overviewPage = PagesMap.PollOverview.getRoute(createdPollId);

        navigate(overviewPage);
    };

    return (
        <div className={styles.PollCreationPage}>
            <PollCreationWizard onPollCreate={handlePollCreate} onPollCreationCancel={handlePollCreationCancel} />
        </div>
    );
};
