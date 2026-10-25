import { ExpandableList } from '@/shared/ui/expandable-list';
import { Group } from '@/shared/ui/group';
import { Typography } from '@/shared/ui/typography';
import { Icon } from '@/shared/ui/icon';
import { Button } from '@/shared/ui/button';
import { PlainSelect } from '@/shared/ui/plain-select';
import { UserAvatar, UserPreviewCard } from '@/entities/user';
import { PollAccessTypeEnum } from '@/entities/survey-poll';
import { SelectUserCombobox } from '@/features/select-user';
import { PollAccessTypeOptions, DefaultPollAccessTypeOption } from '../../model/constants/poll-access-type-options';
import styles from './AccessSettings.module.scss';
import type { FC } from 'react';
import type { TUser } from '@/entities/user';
import type { TPollAccessType } from '@/entities/survey-poll';
import type { IAccessSettingsProps } from './AccessSettings.props';

export const AccessSettings: FC<IAccessSettingsProps> = ({ accessSettings, onAccessSettingsUpdate }) => {
    const handleTypeSelect = (type: TPollAccessType | null): void => {
        onAccessSettingsUpdate((prevState) => {
            type ??= DefaultPollAccessTypeOption.value;

            if (type === prevState.type) {
                return prevState;
            } else {
                return type === PollAccessTypeEnum.SPECIFIED ? { type, holders: [] } : { type };
            }
        });
    };

    const handleHolderAdd = (user: TUser): void => {
        return onAccessSettingsUpdate((prevState) => {
            if (prevState.type !== PollAccessTypeEnum.SPECIFIED) {
                return prevState;
            }

            return { ...prevState, holders: [...prevState.holders, user] };
        });
    };

    const handleHolderRemove = (userId: TUser['id']): void => {
        return onAccessSettingsUpdate((prevState) => {
            if (prevState.type !== PollAccessTypeEnum.SPECIFIED) {
                return prevState;
            }

            return { ...prevState, holders: prevState.holders.filter((user) => user.id !== userId) };
        });
    };

    return (
        <div className={styles.AccessSettings}>
            <Group gap="4" direction="column">
                <Typography element="label" type="text" size="small" color="weak">
                    Доступ к опросу
                </Typography>

                <PlainSelect value={accessSettings.type} options={PollAccessTypeOptions} onOptionSelect={handleTypeSelect}>
                    {(valueRender) => (
                        <Button variant="themed" size="medium">
                            {valueRender}
                        </Button>
                    )}
                </PlainSelect>
            </Group>

            {accessSettings.type === PollAccessTypeEnum.SPECIFIED && (
                <Group direction="column" gap="4">
                    <SelectUserCombobox
                        useResetOnSelect
                        onUserSelect={handleHolderAdd}
                        excludedUserIds={accessSettings.holders.map((user) => user.id)}
                        searchScope="access-settings"
                        placeholder="Добавить пользователя..."
                    />

                    {accessSettings.holders.length > 0 && (
                        <Typography element="div" type="text" size="small" color="weak" className={styles.AccessSettingsHoldersListLabel}>
                            Опрос доступен для:
                        </Typography>
                    )}

                    <ExpandableList items={accessSettings.holders} className={styles.AccessSettingsHoldersList}>
                        {(item) => (
                            <Group align="center">
                                <UserPreviewCard user={item}>
                                    <Group gap="8" align="center" className={styles.AccessSettingsHoldersListItem}>
                                        <UserAvatar user={item} size="medium" />

                                        <Typography type="text" size="medium" weight="light" useTruncation>
                                            {item.fullName}
                                        </Typography>
                                    </Group>
                                </UserPreviewCard>

                                <Button variant="iconOnly" size="small" onClick={() => handleHolderRemove(item.id)}>
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
