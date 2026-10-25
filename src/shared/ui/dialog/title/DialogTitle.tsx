import { Dialog } from '@base-ui/react/dialog';
import { Typography } from '@/shared/ui/typography';
import type { FC } from 'react';
import type { TDialogTitleProps } from './DialogTitle.props';

export const DialogTitle: FC<TDialogTitleProps> = ({ size = 'medium', weight = 'medium', ...props }) => {
    return <Dialog.Title render={<Typography element="h3" type="title" size={size} weight={weight} />} {...props} />;
};
