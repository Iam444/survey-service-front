import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Group } from '@/shared/ui/group';
import { Typography } from '@/shared/ui/typography';
import { ExpandableText } from '@/shared/ui/expandable-text';
import { Button } from '@/shared/ui/button';
import { ButtonLayout } from '@/shared/ui/button-layout';
import { PagesMap } from '@/shared/config/routes';
import { PollStatusEnum, usePollOverview } from '@/entities/survey-poll';
import { usePollMutations } from '../model/hooks/use-poll-mutations';
import { PollSkeleton } from './Poll.skeleton';
import { PollMenu } from './parts/PollMenu';
import { PollOption } from './parts/PollOption';
import { ShowPollOptionDescriptionDialog } from './show-poll-option-description-dialog/ShowPollOptionDescriptionDialog';
import { EditPollDialog } from './edit-poll-dialog/EditPollDialog';
import styles from './Poll.module.scss';
import type { FC } from 'react';
import type { IPollProps } from './Poll.props';

export const Poll: FC<IPollProps> = ({ id }) => {
    const { data: pollOverview, isFetching, isMutating } = usePollOverview(id);
    const { submitSelection, resetSelection, changeStatus } = usePollMutations(id);

    const [viewerSelection, setViewerSelection] = useState(pollOverview?.viewerSelection || []);

    if (isFetching || isMutating || !pollOverview) {
        return <PollSkeleton />;
    }

    const handleOptionSelect = (id: number): void => {
        if (pollOverview.settings.isMultiChoiceEnabled) {
            setViewerSelection((prevOptionIds) => [...prevOptionIds, id]);
        } else {
            setViewerSelection([id]);
        }
    };

    const handleOptionDeselect = (id: number): void => {
        if (pollOverview.settings.isMultiChoiceEnabled) {
            setViewerSelection((prevOptionIds) => prevOptionIds.filter((optionId) => optionId !== id));
        } else {
            setViewerSelection([]);
        }
    };

    const handleSelectionSubmit = (): void => {
        submitSelection(pollOverview, viewerSelection);
    };

    const handleSelectionReset = (): void => {
        resetSelection({ onSuccess: () => setViewerSelection([]) });
    };

    const handlePollPublish = (): void => {
        changeStatus(PollStatusEnum.OPENED);
    };

    const handlePollClose = (): void => {
        changeStatus(PollStatusEnum.CLOSED);
    };

    const isViewerSelectionSubmitted = pollOverview.viewerSelection.length > 0;
    const isSelectionMapEmpty = viewerSelection.length === 0;
    const isOptionsInteractable = pollOverview.status === PollStatusEnum.OPENED && !isViewerSelectionSubmitted;

    return (
        <>
            <div className={styles.Poll}>
                <Group gap="18" justify="between" align="center" flex="none" className={styles.PollHeader}>
                    <Typography element="h3" type="title" size="medium" weight="semiBold">
                        Опросник голосования
                    </Typography>

                    <PollMenu
                        pollId={id}
                        pollStatus={pollOverview.status}
                        pollAuthorId={pollOverview.author.id}
                        onPollPublish={handlePollPublish}
                        onPollClose={handlePollClose}
                    />
                </Group>

                <Group gap="24" direction="column" className={styles.PollContent}>
                    {pollOverview.description && <ExpandableText text={pollOverview.description} maxLines="4" className={styles.PollDescription} />}

                    <ul className={styles.PollOptionsList}>
                        {pollOverview.options.map((option) => (
                            <PollOption
                                key={option.id}
                                showRadio={!pollOverview.settings.isMultiChoiceEnabled}
                                {...option}
                                pollFormat={pollOverview.format}
                                isDisabled={!isOptionsInteractable}
                                isSelected={viewerSelection.includes(option.id)}
                                onOptionSelect={handleOptionSelect}
                                onOptionDeselect={handleOptionDeselect}
                            />
                        ))}
                    </ul>

                    {pollOverview.status === PollStatusEnum.OPENED && isViewerSelectionSubmitted && (
                        <Button variant="themed" size="medium" onClick={handleSelectionReset}>
                            Переголосовать
                        </Button>
                    )}

                    {pollOverview.status === PollStatusEnum.OPENED && !isViewerSelectionSubmitted && (
                        <Button variant="solid" size="medium" disabled={isSelectionMapEmpty} onClick={handleSelectionSubmit}>
                            Голосовать
                        </Button>
                    )}

                    {pollOverview.status === PollStatusEnum.CLOSED && (
                        <ButtonLayout variant="themed" size="medium">
                            <Link to={PagesMap.PollResults.getRoute(id)}>К результатам</Link>
                        </ButtonLayout>
                    )}
                </Group>
            </div>

            <EditPollDialog id={id} name={pollOverview.name} description={pollOverview.description} />
            <ShowPollOptionDescriptionDialog />
        </>
    );
};
