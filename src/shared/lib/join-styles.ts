type TStyle = string | false | null | undefined;
type TComputedStyle<T> = (state: T) => TStyle;
type TFinalClassName = string | undefined;

export function joinStyles(...styles: TStyle[]): TFinalClassName;
export function joinStyles<TState>(...styles: (TStyle | TComputedStyle<TState>)[]): (state: TState) => TFinalClassName;
export function joinStyles<TState>(...styles: (TStyle | TComputedStyle<TState>)[]): TFinalClassName | ((state: TState) => TFinalClassName) {
    return isPlainStyleList(styles) ? filterStyles(styles) : (state: TState): TFinalClassName => filterStyles(resolveStyles(styles, state));
}

function filterStyles(styles: TStyle[]): TFinalClassName {
    return styles.filter((style) => typeof style === 'string' && Boolean(style)).join(' ') || undefined;
}

function resolveStyles<TState>(styles: (TStyle | TComputedStyle<TState>)[], state: TState): TStyle[] {
    return styles.map((style) => (typeof style === 'function' ? style(state) : style));
}

function isPlainStyleList<TState>(styles: TStyle[] | (TStyle | TComputedStyle<TState>)[]): styles is TStyle[] {
    return !styles.some((style) => typeof style === 'function');
}
