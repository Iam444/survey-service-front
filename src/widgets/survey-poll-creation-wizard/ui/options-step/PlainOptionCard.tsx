import { useState } from 'react';
import { Typography } from '@/shared/ui/typography';
import { Group } from '@/shared/ui/group';
import { editPollOptionDescriptionDialogHandler } from '../../model/constants/edit-poll-option-description-dialog-handler';
import styles from './PlainOptionCard.module.scss';
import { PlainOptionNameEdit } from './PlainOptionNameEdit';
import { OptionCardLayout } from './OptionCardLayout';
import type { FC } from 'react';
import type { TPollPlainOption } from '@/entities/survey-poll';
import type { IPlainOptionCardProps } from './PlainOptionCard.props';

export const PlainOptionCard: FC<IPlainOptionCardProps> = ({
    id,
    name,
    description,
    checkIfOptionNameUnique,
    onOptionEditingStateChange,
    onOptionNameEnter,
    onOptionDelete,
}) => {
    const [showInput, setShowInput] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleNameChange = (name: TPollPlainOption['name']): void => {
        onOptionEditingStateChange(true);

        if (name) {
            setHasError(!checkIfOptionNameUnique(name, id));
        }
    };

    const handleNameEnter = (name: TPollPlainOption['name']): void => {
        setShowInput(false);
        setHasError(false);
        onOptionEditingStateChange(false);

        if (!name) {
            onOptionDelete(id);

            return;
        }

        if (checkIfOptionNameUnique(name, id)) {
            onOptionNameEnter(id, name);
        }
    };

    return (
        <OptionCardLayout
            errorMessage={hasError ? 'Имя опции должно быть уникальным' : null}
            onOptionDelete={() => onOptionDelete(id)}
            onOptionDescriptionEdit={() =>
                editPollOptionDescriptionDialogHandler.openWithPayload({
                    optionId: id,
                    optionName: name,
                    optionDescription: description,
                })
            }
        >
            {showInput ? (
                <PlainOptionNameEdit hasError={hasError} name={name} onNameChange={handleNameChange} onNameEnter={handleNameEnter} />
            ) : (
                <Group gap="8" align="center" flex="1" tabIndex={0} onFocus={() => setShowInput(true)}>
                    <Typography type="text" size="medium" useTruncation className={styles.PlainOptionCardText}>
                        {name}
                    </Typography>
                </Group>
            )}
        </OptionCardLayout>
    );
};
