import type { TTextProps } from '@/shared/ui/typography';

export interface IFieldLabelProps extends TFieldLabelProps {
    children: string;
}

type TFieldLabelProps = Omit<TTextProps<'label'>, 'element' | 'type' | 'size'> & Partial<Pick<TTextProps<'label'>, 'size'>>;
