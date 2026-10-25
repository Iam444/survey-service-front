import type { SelectTriggerProps } from '@base-ui/react/select';
import type { IButtonProps } from '@/shared/ui/button';

export type TSelectTriggerProps = SelectTriggerProps & Omit<IButtonProps, 'variant' | 'size'> & Partial<Pick<IButtonProps, 'variant' | 'size'>>;
