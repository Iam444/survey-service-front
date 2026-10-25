import { Typography } from '@/shared/ui/typography';
import { usePollOverview, PollStatusEnum } from '@/entities/survey-poll';
import { PollStatusBlockSkeleton } from './PollStatusBlock.skeleton';
import styles from './PollStatusBlock.module.scss';
import type { FC } from 'react';
import type { IPollStatusBlockProps } from './PollStatusBlock.props';

export const PollStatusBlock: FC<IPollStatusBlockProps> = ({ pollId }) => {
    const { data: pollOverview, isFetching, isMutating } = usePollOverview(pollId);

    const isViewerSelectionSubmitted = pollOverview ? pollOverview.viewerSelection.length > 0 : false;

    if (isFetching || isMutating || !pollOverview) {
        return <PollStatusBlockSkeleton />;
    }

    const getTitle = (): string => {
        switch (pollOverview.status) {
            case PollStatusEnum.CREATED: {
                return 'Опрос не опубликован';
            }

            case PollStatusEnum.OPENED: {
                return 'Опрос открыт';
            }

            case PollStatusEnum.CLOSED: {
                return 'Опрос завершен';
            }
        }
    };

    let subtitle: string | null = null;

    if ((pollOverview.status === PollStatusEnum.CLOSED || pollOverview.status === PollStatusEnum.OPENED) && isViewerSelectionSubmitted) {
        subtitle = 'Вы приняли участие в опросе';
    } else if (pollOverview.status === PollStatusEnum.CLOSED && !isViewerSelectionSubmitted) {
        subtitle = 'Вы не принимали участия в опросе';
    }

    return (
        <div className={styles.PollStatusBlock}>
            <Typography element="h2" type="title" size="extraLarge" weight="extraLight" align="center">
                {getTitle()}
            </Typography>

            {subtitle && (
                <Typography type="title" size="extraSmall" weight="regular" align="center" color="weak">
                    {subtitle}
                </Typography>
            )}
        </div>
    );
};
