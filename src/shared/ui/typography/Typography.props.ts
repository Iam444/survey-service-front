import type { ComponentPropsWithRef } from 'react';
import type {
    TTypographyType,
    TTitleSize,
    TTextSize,
    TTypographyColor,
    TTypographyAlign,
    TTypographyWeight,
    TTypographyMaxLines,
    TTypographyElement,
    TTypographyWhitespace,
} from './types';

export type TTypographyProps<TElement extends TTypographyElement> = (ITitleProps<TElement> | ITextProps<TElement>) &
    Omit<ComponentPropsWithRef<TElement>, keyof ITypographyPropsBase<TElement>>;

interface ITypographyPropsBase<TElement extends TTypographyElement> {
    element?: TElement;
    type: TTypographyType;
    size: TTitleSize | TTextSize;
    color?: TTypographyColor | undefined;
    weight?: TTypographyWeight | undefined;
    align?: TTypographyAlign | undefined;
    whitespace?: TTypographyWhitespace | undefined;
    maxLines?: TTypographyMaxLines | undefined;
    useTruncation?: boolean;
}

interface ITextProps<TElement extends TTypographyElement> extends ITypographyPropsBase<TElement> {
    type: 'text';
    size: TTextSize;
}

interface ITitleProps<TElement extends TTypographyElement> extends ITypographyPropsBase<TElement> {
    type: 'title';
    size: TTitleSize;
}

export type TTextProps<TElement extends TTypographyElement> = ITextProps<TElement> &
    Omit<ComponentPropsWithRef<TElement>, keyof ITypographyPropsBase<TElement>>;

export type TTitleProps<TElement extends TTypographyElement> = ITextProps<TElement> &
    Omit<ComponentPropsWithRef<TElement>, keyof ITypographyPropsBase<TElement>>;
