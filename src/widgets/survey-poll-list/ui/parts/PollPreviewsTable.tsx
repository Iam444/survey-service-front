import { Link } from 'react-router-dom';
import { Typography } from '@/shared/ui/typography';
import { Table } from '@/shared/ui/table';
import { PagesMap } from '@/shared/config/routes';
import { Group } from '@/shared/ui/group';
import { LoadingIndicator } from '@/shared/ui/laoding-indicator';
import { UserAvatar } from '@/entities/user';
import { PollFormatLabelMap, PollStatusLabelMap, usePollPreviewList } from '@/entities/survey-poll';
import { useFormattedPollPreviewListSortBy } from '../../model/hooks/use-formatted-poll-preview-list-sort-by';
import { useFormattedPollPreviewListFilters } from '../../model/hooks/use-formatted-poll-preview-list-filters';
import styles from './PollPreviewsTable.module.scss';
import type { FC } from 'react';
import type { IPollPreviewsTableProps } from './PollPreviewsTable.props';

export const PollPreviewsTable: FC<IPollPreviewsTableProps> = ({ filters, sortOptionValue }) => {
    const formattedFilters = useFormattedPollPreviewListFilters(filters);
    const formattedSortBy = useFormattedPollPreviewListSortBy(sortOptionValue);

    const { data: pollPreviewList, isFetching } = usePollPreviewList('listing', { limit: 50, filters: formattedFilters, sortBy: formattedSortBy });

    const polls = pollPreviewList?.polls || [];

    const nameColumnWidth = { min: '100px', max: '300px' };
    const formatColumnWidth = { min: '120px', max: '300px' };
    const statusColumnWidth = { min: '120px', max: '300px' };
    const authorColumnWidth = { min: '150px', max: '500px' };

    if (!isFetching && polls.length === 0) {
        return (
            <Group direction="column" gap="8" align="center" className={styles.PollPreviewsTableEmptyResultBlock} role="status">
                <Typography type="title" size="extraLarge" weight="extraLight">
                    Ничего не найдено
                </Typography>

                <Typography type="text" size="medium" weight="extraLight" color="weak">
                    {formattedFilters ? 'Попробуйте изменить фильтры' : 'Вы пока не создавали опросы и не принимали в них участия'}
                </Typography>
            </Group>
        );
    }

    return (
        <Table.Root>
            <Table.Header>
                <Table.HeaderColumn minWidth={nameColumnWidth.min} maxWidth={nameColumnWidth.max} isSticky>
                    <Typography type="text" size="small" color="weak" useTruncation>
                        Название
                    </Typography>
                </Table.HeaderColumn>

                <Table.HeaderColumn minWidth={formatColumnWidth.min} maxWidth={formatColumnWidth.max}>
                    <Typography type="text" size="small" color="weak" useTruncation>
                        Формат
                    </Typography>
                </Table.HeaderColumn>

                <Table.HeaderColumn minWidth={statusColumnWidth.min} maxWidth={statusColumnWidth.max}>
                    <Typography type="text" size="small" color="weak" useTruncation>
                        Статус
                    </Typography>
                </Table.HeaderColumn>

                <Table.HeaderColumn minWidth={authorColumnWidth.min} maxWidth={authorColumnWidth.max}>
                    <Typography type="text" size="small" color="weak" useTruncation>
                        Автор
                    </Typography>
                </Table.HeaderColumn>
            </Table.Header>

            {isFetching ? (
                <LoadingIndicator size="medium" className={styles.PollPreviewsTableLoadingIndicator} />
            ) : (
                <Table.Body>
                    {polls.map((poll) => (
                        <Table.Row key={poll.id} className={styles.PollPreviewsTableRow}>
                            <Table.RowCell minWidth={nameColumnWidth.min} maxWidth={nameColumnWidth.max} isSticky>
                                <Link to={PagesMap.PollOverview.getRoute(poll.id)} className={styles.PollPreviewsTablePollOverviewLink}>
                                    <Typography type="text" size="medium" useTruncation>
                                        {poll.name}
                                    </Typography>
                                </Link>
                            </Table.RowCell>

                            <Table.RowCell minWidth={formatColumnWidth.min} maxWidth={formatColumnWidth.max}>
                                <Typography type="text" size="medium" useTruncation>
                                    {PollFormatLabelMap[poll.format]}
                                </Typography>
                            </Table.RowCell>

                            <Table.RowCell minWidth={statusColumnWidth.min} maxWidth={statusColumnWidth.max}>
                                <Typography type="text" size="medium">
                                    {PollStatusLabelMap[poll.status]}
                                </Typography>
                            </Table.RowCell>

                            <Table.RowCell minWidth={authorColumnWidth.min} maxWidth={authorColumnWidth.max}>
                                <Group gap="12" align="center">
                                    <UserAvatar size="medium" user={poll.author} />

                                    <Typography type="text" size="medium" useTruncation>
                                        {poll.author.fullName}
                                    </Typography>
                                </Group>
                            </Table.RowCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            )}
        </Table.Root>
    );
};
