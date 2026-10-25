export const getWordWithProperEnding = (wordForms: readonly [string, string, string], quantity: number): string => {
    const cases = [2, 0, 1, 1, 1, 2];

    return wordForms[quantity % 100 > 4 && quantity % 100 < 20 ? 2 : cases[Math.min(quantity % 10, 5)]];
};
