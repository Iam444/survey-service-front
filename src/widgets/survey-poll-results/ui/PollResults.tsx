import { Typography } from '@/shared/ui/typography';
import { LoadingIndicator } from '@/shared/ui/laoding-indicator';
import { usePollResults } from '@/entities/survey-poll';
import { Summary } from './parts/Summary';
import { Statistics } from './parts/Statistics';
import styles from './PollResults.module.scss';
import type { FC } from 'react';
import type { IPollResultsProps } from './PollResults.props';

export const PollResults: FC<IPollResultsProps> = ({ pollId }) => {
    const { data: pollResults, isFetching } = usePollResults(pollId);

    return (
        <div className={styles.PollResults}>
            {isFetching || !pollResults ? (
                <LoadingIndicator size="medium" className={styles.PollResultsLoadingIndicator} />
            ) : (
                <>
                    <header>
                        <Typography element="h3" type="title" size="medium" weight="semiBold" align="center">
                            {pollResults && pollResults.statistics ? 'Статистика голосования' : 'Результаты голосования'}
                        </Typography>
                    </header>

                    {pollResults.statistics ? (
                        <Statistics
                            isInMultiChoiceMode={pollResults.isInMultiChoiceMode}
                            isInFullStatisticsMode={pollResults.isInFullStatisticsMode}
                            pollStatistics={pollResults.statistics}
                        />
                    ) : (
                        <Summary isInMultiChoiceMode={pollResults.isInMultiChoiceMode} pollSummary={pollResults.summary} />
                    )}
                </>
            )}
        </div>
    );
};
