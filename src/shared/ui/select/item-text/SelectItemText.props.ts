import type { SelectItemTextProps } from '@base-ui/react/select';
import type { TTextProps } from '@/shared/ui/typography';

export type TSelectItemTextProps = Omit<SelectItemTextProps, 'render'> & Omit<TTextProps<'span'>, 'type'>;
