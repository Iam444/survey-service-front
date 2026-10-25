import type { JSX } from 'react';

export type TTypographyElement = keyof Pick<JSX.IntrinsicElements, 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'label'>;
export type TTypographyType = 'text' | 'title';
export type TTitleSize = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'huge';
export type TTextSize = 'small' | 'medium' | 'large';
export type TTypographyWeight = 'thin' | 'extraLight' | 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold' | 'black';
export type TTypographyAlign = 'left' | 'center' | 'right';
export type TTypographyColor = 'default' | 'weak' | 'primary' | 'danger';
export type TTypographyMaxLines = '2' | '3' | '4' | '5';
export type TTypographyWhitespace = 'normal' | 'nowrap';
