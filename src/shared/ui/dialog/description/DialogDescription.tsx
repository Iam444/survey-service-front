import { Dialog } from '@base-ui/react/dialog';
import { Typography } from '@/shared/ui/typography';
import type { FC } from 'react';
import type { TDialogDescriptionProps } from './DialogDescription.props';

export const DialogDescription: FC<TDialogDescriptionProps> = ({ size = 'medium', ...props }) => {
    return <Dialog.Description render={<Typography element="p" type="text" size={size} />} {...props} />;
};
