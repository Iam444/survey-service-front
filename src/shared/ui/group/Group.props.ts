import type { HTMLAttributes } from 'react';
import type { TGroupDirection, TGroupAlign, TGroupJustify, TGroupGap, TFlex, TWrap } from './types';

export interface IGroupProps extends HTMLAttributes<HTMLDivElement> {
    direction?: TGroupDirection | undefined;
    justify?: TGroupJustify | undefined;
    align?: TGroupAlign | undefined;
    gap?: TGroupGap | undefined;
    flex?: TFlex | undefined;
    wrap?: TWrap | undefined;
}
