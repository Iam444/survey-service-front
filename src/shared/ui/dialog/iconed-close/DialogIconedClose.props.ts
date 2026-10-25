import type { DialogCloseProps } from '@base-ui/react/dialog';
import type { IButtonProps } from '@/shared/ui/button';
import type { IIconProps } from '@/shared/ui/icon';

export type TDialogIconedCloseProps = Omit<DialogCloseProps, 'render'> &
    Omit<IButtonProps, 'variant' | 'size'> &
    Partial<Pick<IButtonProps, 'size'>> & {
        iconName?: IIconProps['name'];
        iconSize?: IIconProps['size'];
    };
