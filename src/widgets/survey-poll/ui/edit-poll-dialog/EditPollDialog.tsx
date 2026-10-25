import { useState } from 'react';
import { Dialog } from '@/shared/ui/dialog';
import { Group } from '@/shared/ui/group';
import { Button } from '@/shared/ui/button';
import { Field, REQUIRED_FIELD_RULE } from '@/shared/ui/field';
import { TextInput } from '@/shared/ui/text-input';
import { Textarea } from '@/shared/ui/textarea';
import { useEditPoll } from '../../model/hooks/use-edit-poll';
import { editPollDialogHandler } from '../../model/constants/edit-poll-dialog-handler';
import type { FC } from 'react';
import type { TPoll } from '@/entities/survey-poll';
import type { IEditPollDialogProps } from './EditPollDialog.props';

export const EditPollDialog: FC<IEditPollDialogProps> = ({ id, name: initialName, description: initialDescription }) => {
    const { mutate, isPending } = useEditPoll(id);

    const [name, setName] = useState<TPoll['name'] | null>(initialName);
    const [isNameValid, setIsNameValid] = useState(true);
    const [description, setDescription] = useState<TPoll['description']>(initialDescription);

    const handleOpenChange = (isOpened: boolean): void => {
        if (isOpened) {
            setName(initialName);
            setDescription(initialDescription);
        }
    };

    const handleEditionComplete = (): void => {
        if (!name) return;

        mutate(
            { pollId: id, payload: { name: name, description: description } },
            {
                onSuccess: () => {
                    editPollDialogHandler.close();
                },
            },
        );
    };

    const isConfirmable = isNameValid && name && (name !== initialName || description !== initialDescription);

    return (
        <Dialog.Root handle={editPollDialogHandler} onOpenChange={handleOpenChange} modal>
            <Dialog.Portal>
                <Dialog.Backdrop />

                <Dialog.Popup size="extraSmall">
                    <Dialog.Header>
                        <Dialog.Title>Редактирование опроса</Dialog.Title>
                        <Dialog.IconedClose />
                    </Dialog.Header>

                    <Dialog.Content>
                        <Group direction="column" gap="18">
                            <Field.Root isRequired>
                                <Field.Label>Название</Field.Label>

                                <Field.Control
                                    defaultValue={initialName}
                                    onValueChange={(_, isValid) => setIsNameValid(isValid)}
                                    onValueEnter={(fieldValue, isValid) => isValid && setName(fieldValue.trimmed)}
                                >
                                    <TextInput maxLength={60} onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()} />
                                </Field.Control>

                                <Field.InvalidityMessage rule={REQUIRED_FIELD_RULE}>Название опроса не может быть пустым</Field.InvalidityMessage>
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Описание</Field.Label>

                                <Field.Control
                                    defaultValue={initialDescription || ''}
                                    onValueEnter={(fieldValue) => setDescription(fieldValue.trimmed || null)}
                                >
                                    <Textarea rows={4} maxRows={8} maxLength={500} />
                                </Field.Control>
                            </Field.Root>
                        </Group>
                    </Dialog.Content>

                    <Dialog.Footer>
                        <Button variant="solid" size="medium" disabled={!isConfirmable} isLoading={isPending} onClick={handleEditionComplete}>
                            Сохранить
                        </Button>
                    </Dialog.Footer>
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
