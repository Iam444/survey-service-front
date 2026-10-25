import type { DialogCloseProps } from '@base-ui/react/dialog';
import type { IButtonProps } from '@/shared/ui/button';

export type TDialogCloseProps = Omit<DialogCloseProps, 'render'> &
    Omit<IButtonProps, 'variant' | 'size'> &
    Partial<Pick<IButtonProps, 'variant' | 'size'>>;
