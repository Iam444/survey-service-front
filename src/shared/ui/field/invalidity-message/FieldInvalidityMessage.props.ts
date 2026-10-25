import type { TTextProps } from '@/shared/ui/typography';

export interface IFieldInvalidityMessageProps extends TFieldInvalidityMessageProps {
    rule: string;
    children: string;
}

type TFieldInvalidityMessageProps = Omit<TTextProps<'div'>, 'element' | 'type' | 'size'> & Partial<Pick<TTextProps<'div'>, 'size'>>;
