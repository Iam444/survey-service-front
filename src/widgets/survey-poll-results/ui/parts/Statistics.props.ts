import type { TPollResults } from '../../model/types/poll-results.type';

export interface IStatisticsProps {
    isInMultiChoiceMode: TPollResults['isInMultiChoiceMode'];
    isInFullStatisticsMode: TPollResults['isInFullStatisticsMode'];
    pollStatistics: NonNullable<TPollResults['statistics']>;
}
