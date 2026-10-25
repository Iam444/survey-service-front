import type { SelectValueProps } from '@base-ui/react/select';
import type { TTextProps } from '@/shared/ui/typography';

export type TSelectValueProps = Omit<SelectValueProps, 'render'> & Omit<TTextProps<'span'>, 'type'>;
