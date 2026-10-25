import { Typography } from '@/shared/ui/typography';
import { Badge } from '@/shared/ui/badge';
import { Group } from '@/shared/ui/group';
import { ExpandableList } from '@/shared/ui/expandable-list';
import {
    usePollOverview,
    PollFormatLabelMap,
    PollStatusLabelMap,
    PollAccessTypeEnum,
    PollStatisticsDisplayFormatEnum,
    PollStatisticsAccessTypeEnum,
} from '@/entities/survey-poll';
import { UserAvatar, UserPreviewCard } from '@/entities/user';
import { PollInfoPanelSkeleton } from './PollInfoPanel.skeleton';
import { LabeledRow } from './parts/LabeledRow';
import styles from './PollInfoPanel.module.scss';
import { PollAccessTypeDescriptionMap } from './constants/poll-access-type-description-map';
import { PollStatisticsDisplayFormatDescriptionMap } from './constants/poll-statistics-display-format-description-map';
import { PollStatisticsAccessTypeDescriptionMap } from './constants/poll-statistics-access-type-description-map';
import type { FC } from 'react';
import type { IPollInfoPanelProps } from './PollInfoPanel.props';

export const PollInfoPanel: FC<IPollInfoPanelProps> = ({ pollId }) => {
    const { data: pollOverview, isFetching, isMutating } = usePollOverview(pollId);

    if (isFetching || isMutating || !pollOverview) {
        return <PollInfoPanelSkeleton />;
    }

    return (
        <div className={styles.PollInfoPanel}>
            <Group direction="column" gap="24" className={styles.PollInfoPanelGeneralData}>
                <Typography element="h3" type="title" size="medium" weight="semiBold">
                    Об опросе
                </Typography>

                <Group direction="column" gap="8">
                    <LabeledRow label="Статус">
                        <Badge size="medium">{PollStatusLabelMap[pollOverview.status]}</Badge>
                    </LabeledRow>

                    <LabeledRow label="Формат">
                        <Typography type="text" size="medium" useTruncation>
                            {PollFormatLabelMap[pollOverview.format]}
                        </Typography>
                    </LabeledRow>

                    <LabeledRow label="Автор">
                        <UserPreviewCard user={pollOverview.author}>
                            <Group gap="8" align="center" className={styles.PollInfoPanelUserPreview}>
                                <UserAvatar user={pollOverview.author} size="medium" />

                                <Typography type="text" size="medium" useTruncation>
                                    {pollOverview.author.fullName}
                                </Typography>
                            </Group>
                        </UserPreviewCard>
                    </LabeledRow>
                </Group>
            </Group>

            <Group direction="column" gap="24" className={styles.PollInfoPanelSettings}>
                <Typography element="h3" type="title" size="medium" weight="semiBold">
                    Настройки опроса
                </Typography>

                <Group direction="column" gap="18">
                    <LabeledRow label="Выбор опций">
                        {pollOverview.settings.isMultiChoiceEnabled ? 'Множественный выбор' : 'Одиночный выбор'}
                    </LabeledRow>

                    <LabeledRow label="Доступ" shouldAlignTop>
                        <Group direction="column" gap="4" align="start">
                            <Typography type="text" size="medium">
                                {PollAccessTypeDescriptionMap[pollOverview.settings.accessSettings.type]}
                            </Typography>

                            {pollOverview.settings.accessSettings.type === PollAccessTypeEnum.SPECIFIED && (
                                <ExpandableList
                                    initialListLength={3}
                                    lengthLimitSensitivity={1}
                                    items={pollOverview.settings.accessSettings.holders}
                                    className={styles.PollInfoPanelUserList}
                                >
                                    {(holder) => (
                                        <UserPreviewCard user={holder}>
                                            <Group gap="8" align="center" className={styles.PollInfoPanelUserPreview}>
                                                <UserAvatar user={holder} size="medium" />

                                                <Typography type="text" size="medium" useTruncation>
                                                    {holder.fullName}
                                                </Typography>
                                            </Group>
                                        </UserPreviewCard>
                                    )}
                                </ExpandableList>
                            )}
                        </Group>
                    </LabeledRow>

                    <LabeledRow label="Статистика" shouldAlignTop>
                        <Group direction="column" gap="12" align="start">
                            <Typography type="text" size="medium">
                                {PollStatisticsDisplayFormatDescriptionMap[pollOverview.settings.statisticsSettings.displayFormat]}
                            </Typography>

                            {pollOverview.settings.statisticsSettings.displayFormat !== PollStatisticsDisplayFormatEnum.NONE &&
                                pollOverview.settings.statisticsSettings.accessSettings.type !== PollStatisticsAccessTypeEnum.PRIVATE && (
                                    <Typography type="text" size="medium">
                                        {pollOverview.settings.statisticsSettings.shouldShowAfterVoting
                                            ? 'Видна сразу после участия в опросе'
                                            : 'Видна только после завершения опроса'}
                                    </Typography>
                                )}

                            {pollOverview.settings.statisticsSettings.displayFormat !== PollStatisticsDisplayFormatEnum.NONE && (
                                <Group direction="column" gap="4" align="start">
                                    <Typography type="text" size="medium">
                                        {PollStatisticsAccessTypeDescriptionMap[pollOverview.settings.statisticsSettings.accessSettings.type]}
                                    </Typography>

                                    {pollOverview.settings.statisticsSettings.accessSettings.type === PollStatisticsAccessTypeEnum.SPECIFIED && (
                                        <ExpandableList
                                            initialListLength={3}
                                            lengthLimitSensitivity={1}
                                            items={pollOverview.settings.statisticsSettings.accessSettings.holders}
                                            className={styles.PollInfoPanelUserList}
                                        >
                                            {(holder) => (
                                                <UserPreviewCard user={holder}>
                                                    <Group gap="8" align="center" className={styles.PollInfoPanelUserPreview}>
                                                        <UserAvatar user={holder} size="medium" />

                                                        <Typography type="text" size="medium" useTruncation>
                                                            {holder.fullName}
                                                        </Typography>
                                                    </Group>
                                                </UserPreviewCard>
                                            )}
                                        </ExpandableList>
                                    )}
                                </Group>
                            )}
                        </Group>
                    </LabeledRow>
                </Group>
            </Group>
        </div>
    );
};
