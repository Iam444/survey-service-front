import type { DialogDescriptionProps } from '@base-ui/react/dialog';
import type { TTextProps } from '@/shared/ui/typography';

export type TDialogDescriptionProps = Omit<DialogDescriptionProps, 'render'> &
    Omit<TTextProps<'p'>, 'type' | 'element' | 'size'> &
    Partial<Pick<TTextProps<'p'>, 'size'>>;
