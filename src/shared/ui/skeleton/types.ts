import type { TButtonSize } from '@/shared/ui/button';
import type { TTypographyType, TTitleSize, TTextSize } from '@/shared/ui/typography/types';

export type TFitOptions =
    | `${Extract<TTypographyType, 'title'>}-${TTitleSize}`
    | `${Extract<TTypographyType, 'text'>}-${TTextSize}`
    | `button-${TButtonSize}`
    | 'textInput';
