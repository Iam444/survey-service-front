export const hashString = (string: string): number => {
    const shift = 5;

    let base = 5381;

    for (let i = 0; i < string.length; i++) {
        base = ((base << shift) + base) ^ (string.codePointAt(i) ?? 0);
    }

    return base >>> 0;
};
