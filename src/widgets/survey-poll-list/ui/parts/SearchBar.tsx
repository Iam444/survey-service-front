import { useState, useMemo, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Combobox } from '@/shared/ui/combobox';
import { Typography } from '@/shared/ui/typography';
import { useDebounce } from '@/shared/lib/use-debounce';
import { LoadingIndicator } from '@/shared/ui/laoding-indicator';
import { Icon } from '@/shared/ui/icon';
import { PagesMap } from '@/shared/config/routes';
import { usePollPreviewList } from '@/entities/survey-poll';
import styles from './SearchBar.module.scss';
import type { FC } from 'react';
import type { TPollPreview } from '@/entities/survey-poll';
import type { ISearchBarProps } from './SearchBar.props';

const NAME_FILTER = 'nameFilter' as const;
type TNameFilter = typeof NAME_FILTER;

export const SearchBar: FC<ISearchBarProps> = ({ onSearchNameEnter }) => {
    const [searchNameValue, setSearchNameValue] = useState('');

    const debouncedSearchString = useDebounce(searchNameValue, 600);

    const navigate = useNavigate();

    const filters = useMemo(
        () => (debouncedSearchString.trim() ? { name: { contains: debouncedSearchString.trim() } } : undefined),
        [debouncedSearchString],
    );

    const inputRef = useRef<HTMLInputElement>(null);

    const { data: pollPreviewList, isFetching } = usePollPreviewList('searchBox', { filters, limit: 10 }, false);

    const polls = useMemo(() => pollPreviewList?.polls || [], [pollPreviewList]);
    const suggestions = useMemo(() => [NAME_FILTER, ...polls], [polls]);

    const handleSearchNameChange = (value: string): void => {
        setSearchNameValue(value);

        const searchNam = value.trim();

        if (!searchNam) {
            onSearchNameEnter(null);
        }
    };

    const handleValueChange = (item: TPollPreview | null | TNameFilter): void => {
        if (!item) {
            setSearchNameValue('');
        } else if (item === NAME_FILTER) {
            onSearchNameEnter(searchNameValue);

            inputRef.current?.blur();
        } else {
            navigate(PagesMap.PollOverview.getRoute(item.id));
        }
    };

    return (
        <div className={styles.SearchBar}>
            <Combobox.Root
                inputValue={searchNameValue}
                onInputValueChange={handleSearchNameChange}
                items={suggestions}
                filter={null}
                onValueChange={handleValueChange}
                itemToStringLabel={() => searchNameValue}
                openOnInputClick={false}
            >
                <Combobox.Input
                    ref={inputRef}
                    placeholder="Введите название проекта..."
                    leftStructure={
                        isFetching ? (
                            <LoadingIndicator size="small" className={styles.SearchBarLoadingIndicator} />
                        ) : (
                            <Icon name="search" size="small" iconColor="weak" className={styles.SearchBarIcon} />
                        )
                    }
                    className={styles.SearchBarInput}
                />

                <Combobox.Portal>
                    <Combobox.Positioner sideOffset={2}>
                        <Combobox.Popup>
                            <Combobox.List className={styles.SearchBarList}>
                                {(poll: TPollPreview | TNameFilter) =>
                                    poll === NAME_FILTER ? (
                                        <Combobox.Item key={0} value={NAME_FILTER} className={styles.SearchBarNameFilter}>
                                            <Icon name="search" size="medium" iconColor="weak" />
                                            <Typography type="text" size="medium" className={styles.SearchBarNameFilterText}>
                                                {'Фильтровать по соответствию с "'}
                                                <b>{searchNameValue}</b>
                                                {'"'}
                                            </Typography>
                                        </Combobox.Item>
                                    ) : (
                                        <Combobox.Item key={poll.id} value={poll} className={styles.SearchBarListItem}>
                                            <Link to={PagesMap.PollOverview.getRoute(poll.id)} className={styles.SearchBarListItemLink}>
                                                <Typography type="text" size="medium" useTruncation className={styles.SearchBarListItemName}>
                                                    {poll.name}
                                                </Typography>
                                            </Link>
                                        </Combobox.Item>
                                    )
                                }
                            </Combobox.List>
                        </Combobox.Popup>
                    </Combobox.Positioner>
                </Combobox.Portal>
            </Combobox.Root>
        </div>
    );
};
