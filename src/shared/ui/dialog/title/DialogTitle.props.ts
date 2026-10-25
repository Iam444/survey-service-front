import type { DialogTitleProps } from '@base-ui/react/dialog';
import type { TTitleProps } from '@/shared/ui/typography';

export type TDialogTitleProps = Omit<DialogTitleProps, 'render'> &
    Omit<TTitleProps<'h3'>, 'type' | 'element' | 'size'> &
    Partial<Pick<TTitleProps<'h3'>, 'size'>>;
