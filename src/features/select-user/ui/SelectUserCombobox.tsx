import { keepPreviousData } from '@tanstack/react-query';
import { useState } from 'react';
import { Combobox } from '@/shared/ui/combobox';
import { Typography } from '@/shared/ui/typography';
import { Group } from '@/shared/ui/group';
import { joinStyles } from '@/shared/lib/join-styles';
import { LoadingIndicator } from '@/shared/ui/laoding-indicator';
import { useDebounce } from '@/shared/lib/use-debounce';
import { UserAvatar, useUserList } from '@/entities/user';
import { useFormattedUserListFilters } from '../model/use-formatted-user-list-filters';
import styles from './SelectUserCombobox.module.scss';
import type { FC } from 'react';
import type { TUser } from '@/entities/user';
import type { ISelectUserComboboxProps } from './SelectUserCombobox.props';

export const SelectUserCombobox: FC<ISelectUserComboboxProps> = ({
    useAutoFocus = false,
    useResetOnSelect = false,
    onUserSelect,
    onComboboxDismiss,
    excludedUserIds,
    includedUserIds,
    limit = 10,
    searchScope,
    placeholder = 'Введите имя или email...',
}) => {
    const [searchValue, setSearchValue] = useState('');

    const debouncedSearchString = useDebounce(searchValue, 600);

    const filters = useFormattedUserListFilters(debouncedSearchString, excludedUserIds, includedUserIds);

    const { data: userList, isFetching } = useUserList(searchScope, { filters, limit }, { placeholderData: keepPreviousData });

    const users = userList?.users || [];

    const handleValueChange = (user: TUser | null): void => {
        if (user) {
            onUserSelect(user);
        }

        if (!user || useResetOnSelect) {
            setSearchValue('');
        }
    };

    const handleOpenChangeComplete = (open: boolean): void => {
        if (!open) {
            onComboboxDismiss?.();
        }
    };

    const finalStatusClassName = joinStyles(styles.SelectUserComboboxStatus, isFetching && debouncedSearchString === '' && styles.showMessage);
    const finalEmptyClassName = joinStyles(styles.SelectUserComboboxEmpty, !isFetching && users.length === 0 && styles.showMessage);

    return (
        <Combobox.Root
            inputValue={searchValue}
            onInputValueChange={setSearchValue}
            items={users}
            filter={null}
            itemToStringLabel={(item: TUser) => (useResetOnSelect ? '' : item.fullName)}
            onValueChange={handleValueChange}
            onOpenChangeComplete={handleOpenChangeComplete}
            defaultOpen={useAutoFocus}
        >
            <Combobox.Input
                autoFocus={useAutoFocus}
                placeholder={placeholder}
                rightStructure={isFetching ? <LoadingIndicator size="small" className={styles.SelectUserComboboxLoadingIndicator} /> : undefined}
                className={styles.SelectUserComboboxInput}
            />

            <Combobox.Portal>
                <Combobox.Positioner sideOffset={2}>
                    <Combobox.Popup>
                        <Combobox.List>
                            {(user: TUser) => (
                                <Combobox.Item key={user.id} value={user}>
                                    <Group gap="8" align="center">
                                        <UserAvatar user={user} size="extraSmall" />

                                        <Group gap="8" align="center">
                                            <Typography type="text" size="medium" useTruncation className={styles.SelectUserComboboxUserName}>
                                                {user.fullName}
                                            </Typography>

                                            <Typography
                                                type="text"
                                                size="small"
                                                color="weak"
                                                useTruncation
                                                className={styles.SelectUserComboboxUserEmail}
                                            >
                                                {user.email}
                                            </Typography>
                                        </Group>
                                    </Group>
                                </Combobox.Item>
                            )}
                        </Combobox.List>

                        <Combobox.Status className={finalStatusClassName}>
                            {isFetching && debouncedSearchString === '' && (
                                <Typography type="text" size="medium" color="weak">
                                    Поиск...
                                </Typography>
                            )}
                        </Combobox.Status>

                        <Combobox.Empty className={finalEmptyClassName}>
                            {!isFetching && users.length === 0 && (
                                <Typography type="text" size="medium" color="weak">
                                    Пользователи не найдены
                                </Typography>
                            )}
                        </Combobox.Empty>
                    </Combobox.Popup>
                </Combobox.Positioner>
            </Combobox.Portal>
        </Combobox.Root>
    );
};
