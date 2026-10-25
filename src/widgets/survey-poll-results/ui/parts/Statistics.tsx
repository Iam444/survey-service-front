import { Typography } from '@/shared/ui/typography';
import { Group } from '@/shared/ui/group';
import { Icon } from '@/shared/ui/icon';
import { joinStyles } from '@/shared/lib/join-styles';
import { ProgressBar } from '@/shared/ui/progress-bar';
import { Button } from '@/shared/ui/button';
import { showFullStatisticsDialogHandler } from '../../model/constants/show-full-statistics-dialog-handler';
import { getVoteAliasWithProperEnding } from '../../lib/get-vote-alias-with-proper-ending';
import styles from './Statistics.module.scss';
import { ShowFullStatisticsDialog } from './ShowFullStatisticsDialog';
import type { FC } from 'react';
import type { IStatisticsProps } from './Statistics.props';

export const Statistics: FC<IStatisticsProps> = ({ isInMultiChoiceMode, isInFullStatisticsMode, pollStatistics }) => {
    const finalViewerSelectionMarkClassName = joinStyles(styles.StatisticsViewerSelectionMark, !isInMultiChoiceMode && styles.rounded);

    return (
        <>
            <ul className={styles.StatisticsOptionList}>
                {pollStatistics.optionStatisticsList.map((pollOptionStatistics, index) => (
                    <li key={index} className={styles.StatisticsOptionStatistics}>
                        <Typography type="text" size="large" className={styles.StatisticsOptionVotesPercentage}>
                            {pollOptionStatistics.votesPercentage}%
                        </Typography>

                        <Group align="center">
                            {pollOptionStatistics.isLeading && (
                                <Icon name="leadership" size="medium" className={styles.StatisticsLeadingOptionIcon} />
                            )}

                            <Typography type="text" size="large" useTruncation className={styles.StatisticsOptionName}>
                                {pollOptionStatistics.option.name}
                            </Typography>

                            <Typography type="text" size="medium" color="weak" className={styles.StatisticsOptionVotesQuantity}>
                                {getVoteAliasWithProperEnding(pollOptionStatistics.votesQuantity)}
                            </Typography>
                        </Group>

                        {pollOptionStatistics.isSelectedByUser && (
                            <div className={finalViewerSelectionMarkClassName}>
                                <Icon name="checkMark" size="extraSmall" />
                            </div>
                        )}

                        <ProgressBar
                            value={pollOptionStatistics.votesQuantity}
                            max={pollStatistics.totalVotesQuantity}
                            className={styles.StatisticsVotesPercentageScale}
                        />
                    </li>
                ))}
            </ul>

            {isInFullStatisticsMode && (
                <>
                    <Button variant="transparent" size="medium" onClick={() => showFullStatisticsDialogHandler.open(null)}>
                        Показать голоса участников
                    </Button>

                    <ShowFullStatisticsDialog optionStatisticsList={pollStatistics.optionStatisticsList} />
                </>
            )}
        </>
    );
};
