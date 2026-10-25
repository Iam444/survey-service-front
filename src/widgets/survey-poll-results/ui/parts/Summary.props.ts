import type { TPollResults } from '../../model/types/poll-results.type';

export interface ISummaryProps {
    isInMultiChoiceMode: TPollResults['isInMultiChoiceMode'];
    pollSummary: TPollResults['summary'];
}
