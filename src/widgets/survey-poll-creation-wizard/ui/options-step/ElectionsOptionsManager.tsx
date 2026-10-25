import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import { Group } from '@/shared/ui/group';
import { Typography } from '@/shared/ui/typography';
import { UserAvatar } from '@/entities/user';
import { SelectUserCombobox } from '@/features/select-user';
import { editPollOptionDescriptionDialogHandler } from '../../model/constants/edit-poll-option-description-dialog-handler';
import { OPTIONS_MAX_QUANTITY } from '../../model/constants/options-max-quantity';
import { EditPollOptionDescriptionDialog } from './EditPollOptionDescriptionDialog';
import styles from './ElectionsOptionManager.module.scss';
import { OptionCardLayout } from './OptionCardLayout';
import type { FC } from 'react';
import type { TPollElectionsOption } from '@/entities/survey-poll';
import type { TUser } from '@/entities/user';
import type { IElectionsOptionsManagerProps } from './ElectionsOptionsManager.props';

export const ElectionsOptionsManager: FC<IElectionsOptionsManagerProps> = ({ options, onOptionsUpdate, children }) => {
    const [addedCardsCounter, setAddedCardsCounter] = useState(() => {
        let maxCounterValue = 1;

        options.forEach((option) => {
            maxCounterValue = Math.max(option.id, maxCounterValue);
        });

        return maxCounterValue;
    });

    const [showCombobox, setShowCombobox] = useState(false);

    const handleUserSelect = (user: TUser): void => {
        onOptionsUpdate((prevState) => [...prevState, { id: addedCardsCounter, name: user.fullName, description: null, candidate: user }]);
        setAddedCardsCounter((prevState) => prevState + 1);
        setShowCombobox(false);
    };

    const handleOptionDelete = (optionId: TPollElectionsOption['id']): void => {
        onOptionsUpdate((prevState) => prevState.filter((option) => option.id !== optionId));
    };

    const handleOptionUpdate = (optionId: TPollElectionsOption['id'], optionData: Partial<Omit<TPollElectionsOption, 'id'>>): void => {
        onOptionsUpdate((prevState) => prevState.map((option) => (option.id === optionId ? { ...option, ...optionData } : option)));
    };

    const isOptionListOverflowed = options.length > OPTIONS_MAX_QUANTITY || (options.length === OPTIONS_MAX_QUANTITY - 1 && showCombobox);
    const isStepCompleted = options.length > 1;

    return (
        <>
            <Group direction="column" gap="12">
                <ul className={styles.ElectionsOptionList}>
                    {options.map((option) => (
                        <OptionCardLayout
                            key={option.id}
                            onOptionDescriptionEdit={() =>
                                editPollOptionDescriptionDialogHandler.openWithPayload({
                                    optionId: option.id,
                                    optionName: option.name,
                                    optionDescription: option.description,
                                })
                            }
                            onOptionDelete={() => handleOptionDelete(option.id)}
                        >
                            <Group gap="12" align="center" flex="auto">
                                <UserAvatar user={option.candidate} size="medium" color="coral" />

                                <Group direction="column">
                                    <Typography type="text" size="medium" useTruncation>
                                        {option.candidate.fullName}
                                    </Typography>

                                    <Typography type="text" size="small" color="weak" useTruncation>
                                        {option.candidate.email}
                                    </Typography>
                                </Group>
                            </Group>
                        </OptionCardLayout>
                    ))}
                </ul>

                {showCombobox ? (
                    <SelectUserCombobox
                        onUserSelect={handleUserSelect}
                        onComboboxDismiss={() => setShowCombobox(false)}
                        useAutoFocus
                        excludedUserIds={options.map((option) => option.candidate.id)}
                        searchScope="elections-options"
                    />
                ) : (
                    <Button variant="transparent" size="medium" disabled={isOptionListOverflowed} onClick={() => setShowCombobox(true)}>
                        <Icon name="plus" size="small" />
                        Добавить кандидата
                    </Button>
                )}
            </Group>

            {children(isStepCompleted)}

            <EditPollOptionDescriptionDialog onOptionDescriptionUpdate={(id, description) => handleOptionUpdate(id, { description })} />
        </>
    );
};
