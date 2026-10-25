import { Typography } from '@/shared/ui/typography';
import { Dialog } from '@/shared/ui/dialog';
import { showPollOptionDescriptionDialogHandler } from '../../model/constants/show-poll-option-description-dialog-handler';
import type { FC } from 'react';

export const ShowPollOptionDescriptionDialog: FC = () => {
    return (
        <Dialog.Root handle={showPollOptionDescriptionDialogHandler} modal>
            {({ payload }) =>
                payload ? (
                    <Dialog.Portal>
                        <Dialog.Backdrop />

                        <Dialog.Popup size="small">
                            <Dialog.Header>
                                <Dialog.Title>{payload.optionName}</Dialog.Title>
                                <Dialog.IconedClose />
                            </Dialog.Header>

                            <Dialog.Content>
                                <Typography element="p" type="text" size="medium">
                                    {payload.optionDescription}
                                </Typography>
                            </Dialog.Content>
                        </Dialog.Popup>
                    </Dialog.Portal>
                ) : null
            }
        </Dialog.Root>
    );
};
