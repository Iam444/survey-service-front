import { useState } from 'react';
import { Group } from '@/shared/ui/group';
import { PlainSelect } from '@/shared/ui/plain-select';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import { DefaultPollPreviewListSortOption, PollPreviewListSortOptions } from '../model/constants/poll-preview-list-sort-options';
import { PollFormatOptions } from '../model/constants/poll-format-options';
import { PollStatusOptions } from '../model/constants/poll-status-options';
import { FilterSelect } from './parts/FilterSelect';
import styles from './PollList.module.scss';
import { SearchBar } from './parts/SearchBar';
import { PollPreviewsTable } from './parts/PollPreviewsTable';
import type { FC } from 'react';
import type { IPollPreviewListFilters } from '../model/types/poll-preview-list-filters.interface';
import type { TPollPreviewListSortOptionValue } from '../model/types/poll-preview-list-sort-option-value.type';

export const PollList: FC = () => {
    const [filters, setFilter] = useState<IPollPreviewListFilters>({ searchName: null, format: null, status: null });
    const [sortOptionValue, setSortOptionValue] = useState<TPollPreviewListSortOptionValue | null>(null);

    return (
        <div className={styles.PollList}>
            <SearchBar onSearchNameEnter={(searchName) => setFilter((prevState) => ({ ...prevState, searchName }))} />

            <Group gap="18" justify="between" wrap="wrap" className={styles.PollListFiltersGroup}>
                <Group gap="8" wrap="wrap">
                    <FilterSelect
                        placeholder="Формат"
                        options={PollFormatOptions}
                        onOptionSelect={(format) => setFilter((prevState) => ({ ...prevState, format }))}
                    />

                    <FilterSelect
                        placeholder="Статус"
                        options={PollStatusOptions}
                        onOptionSelect={(status) => setFilter((prevState) => ({ ...prevState, status }))}
                    />
                </Group>

                <PlainSelect
                    defaultOption={DefaultPollPreviewListSortOption}
                    options={PollPreviewListSortOptions}
                    onOptionSelect={(optionValue) => setSortOptionValue(optionValue)}
                >
                    {(valueRender) => (
                        <Button variant="transparent" size="small">
                            <Icon name="sort" size="small" />
                            {valueRender}
                        </Button>
                    )}
                </PlainSelect>
            </Group>

            <PollPreviewsTable filters={filters} sortOptionValue={sortOptionValue} />
        </div>
    );
};
