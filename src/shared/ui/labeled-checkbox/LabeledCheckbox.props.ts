import type { ICheckboxProps } from '@/shared/ui/checkbox';
import type { TTextProps } from '@/shared/ui/typography';

export type TLabeledCheckboxProps = ICheckboxProps & Pick<TTextProps<'label'>, 'children'>;
