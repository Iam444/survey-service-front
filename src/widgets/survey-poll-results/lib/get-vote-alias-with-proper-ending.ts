import { getWordWithProperEnding } from '@/shared/lib/get-word-with-proper-ending';

export const getVoteAliasWithProperEnding = (votesQuantity: number): string => {
    const word = getWordWithProperEnding(['голос', 'голоса', 'голосов'], votesQuantity);

    return `${votesQuantity} ${word}`;
};
