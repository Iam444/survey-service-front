import { Dialog } from '@base-ui/react/dialog';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import type { FC } from 'react';
import type { TDialogIconedCloseProps } from './DialogIconedClose.props';

export const DialogIconedClose: FC<TDialogIconedCloseProps> = ({ size = 'small', iconName = 'cross', iconSize = 'small', ...props }) => {
    return (
        <Dialog.Close
            render={
                <Button variant="iconOnly" size={size}>
                    <Icon name={iconName} size={iconSize} />
                </Button>
            }
            {...props}
        />
    );
};
