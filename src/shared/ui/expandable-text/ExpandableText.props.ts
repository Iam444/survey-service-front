import type { TTextProps } from '@/shared/ui/typography';

export interface IExpandableTextProps extends Omit<TTextProps<'p'>, 'type' | 'element' | 'size'>, Partial<Pick<TTextProps<'p'>, 'size'>> {
    text: string;
}
