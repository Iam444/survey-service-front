import { ExpandableList } from '@/shared/ui/expandable-list';
import { Group } from '@/shared/ui/group';
import { Typography } from '@/shared/ui/typography';
import { Icon } from '@/shared/ui/icon';
import { Button } from '@/shared/ui/button';
import { PlainSelect } from '@/shared/ui/plain-select';
import { UserAvatar, UserPreviewCard } from '@/entities/user';
import { PollAccessTypeEnum, PollStatisticsAccessTypeEnum } from '@/entities/survey-poll';
import { SelectUserCombobox } from '@/features/select-user';
import { PollStatisticsAccessTypeOptions, DefaultPollStatisticsAccessTypeOption } from '../../model/constants/poll-statistics-access-type-options';
import styles from './StatisticsAccessSettings.module.scss';
import type { FC } from 'react';
import type { TUser } from '@/entities/user';
import type { TPollStatisticsAccessType } from '@/entities/survey-poll';
import type { IStatisticsAccessSettingsProps } from './StatisticsAccessSettings.props';

export const StatisticsAccessSettings: FC<IStatisticsAccessSettingsProps> = ({
    statisticsAccessSettings,
    onStatisticsAccessSettingsUpdate,
    pollAccessHolders,
}) => {
    const handleTypeSelect = (type: TPollStatisticsAccessType | null): void => {
        onStatisticsAccessSettingsUpdate((prevState) => {
            type ??= DefaultPollStatisticsAccessTypeOption.value;

            if (type === prevState.type) {
                return prevState;
            } else {
                return type === PollStatisticsAccessTypeEnum.SPECIFIED ? { type, holders: [] } : { type };
            }
        });
    };

    const handleHolderAdd = (user: TUser): void => {
        return onStatisticsAccessSettingsUpdate((prevState) => {
            if (prevState.type !== PollStatisticsAccessTypeEnum.SPECIFIED) {
                return prevState;
            }

            return { ...prevState, holders: [...prevState.holders, user] };
        });
    };

    const handleHolderRemove = (userId: TUser['id']): void => {
        return onStatisticsAccessSettingsUpdate((prevState) => {
            if (prevState.type !== PollStatisticsAccessTypeEnum.SPECIFIED) {
                return prevState;
            }

            return { ...prevState, holders: prevState.holders.filter((user) => user.id !== userId) };
        });
    };

    return (
        <div className={styles.StatisticsAccessSettings}>
            <Group gap="4" direction="column">
                <Typography element="label" type="text" size="small" color="weak">
                    Доступ к статистике
                </Typography>

                <PlainSelect value={statisticsAccessSettings.type} options={PollStatisticsAccessTypeOptions} onOptionSelect={handleTypeSelect}>
                    {(valueRender) => (
                        <Button variant="themed" size="medium">
                            {valueRender}
                        </Button>
                    )}
                </PlainSelect>
            </Group>

            {statisticsAccessSettings.type === PollAccessTypeEnum.SPECIFIED && (
                <Group direction="column" gap="4">
                    <SelectUserCombobox
                        useResetOnSelect
                        onUserSelect={handleHolderAdd}
                        excludedUserIds={statisticsAccessSettings.holders.map((user) => user.id)}
                        includedUserIds={pollAccessHolders?.map((user) => user.id)}
                        searchScope="statistics-access-settings"
                        placeholder="Добавить пользователя..."
                    />

                    {statisticsAccessSettings.holders.length > 0 && (
                        <Typography element="div" type="text" size="small" color="weak" className={styles.StatisticsAccessSettingsHoldersListLabel}>
                            Опрос доступен для:
                        </Typography>
                    )}

                    <ExpandableList items={statisticsAccessSettings.holders} className={styles.StatisticsAccessSettingsHoldersList}>
                        {(item) => (
                            <Group align="center">
                                <UserPreviewCard user={item}>
                                    <Group gap="8" align="center" className={styles.StatisticsAccessSettingsHoldersListItem}>
                                        <UserAvatar user={item} size="medium" color="green" />

                                        <Typography type="text" size="medium" weight="light" useTruncation>
                                            {item.fullName}
                                        </Typography>
                                    </Group>
                                </UserPreviewCard>

                                <Button variant="iconOnly" size="medium" onClick={() => handleHolderRemove(item.id)}>
                                    <Icon name="cross" size="extraSmall" />
                                </Button>
                            </Group>
                        )}
                    </ExpandableList>
                </Group>
            )}
        </div>
    );
};
