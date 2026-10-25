import { Dialog } from '@base-ui/react/dialog';
import { Button } from '@/shared/ui/button';
import type { FC } from 'react';
import type { TDialogCloseProps } from './DialogClose.props';

export const DialogClose: FC<TDialogCloseProps> = ({ variant = 'themed', size = 'small', ...props }) => {
    return <Dialog.Close render={<Button variant={variant} size={size} />} {...props} />;
};
