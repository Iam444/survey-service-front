import { useState } from 'react';
import { Dialog } from '@/shared/ui/dialog';
import { Textarea } from '@/shared/ui/textarea';
import { Field } from '@/shared/ui/field';
import { editPollOptionDescriptionDialogHandler } from '../../model/constants/edit-poll-option-description-dialog-handler';
import type { FC } from 'react';
import type { IEditPollOptionDescriptionDialogProps } from './EditPollOptionDescriptionDialog.props';

export const EditPollOptionDescriptionDialog: FC<IEditPollOptionDescriptionDialogProps> = ({ onOptionDescriptionUpdate }) => {
    const [description, setDescription] = useState<string | null>(null);

    return (
        <Dialog.Root handle={editPollOptionDescriptionDialogHandler} modal>
            {({ payload }) =>
                payload ? (
                    <Dialog.Portal>
                        <Dialog.Backdrop />

                        <Dialog.Popup size="extraSmall">
                            <Dialog.Header>
                                <Dialog.Title>{payload.optionName}</Dialog.Title>
                                <Dialog.IconedClose />
                            </Dialog.Header>

                            <Dialog.Content>
                                <Field.Root>
                                    <Field.Label>Описание опции</Field.Label>

                                    <Field.Control
                                        defaultValue={payload.optionDescription || ''}
                                        onValueEnter={(value) => setDescription(value.trimmed || null)}
                                    >
                                        <Textarea rows={6} maxRows={12} maxLength={1500} />
                                    </Field.Control>
                                </Field.Root>
                            </Dialog.Content>

                            <Dialog.Footer>
                                <Dialog.Close variant="solid" size="medium" onClick={() => onOptionDescriptionUpdate(payload.optionId, description)}>
                                    Сохранить
                                </Dialog.Close>
                            </Dialog.Footer>
                        </Dialog.Popup>
                    </Dialog.Portal>
                ) : null
            }
        </Dialog.Root>
    );
};
