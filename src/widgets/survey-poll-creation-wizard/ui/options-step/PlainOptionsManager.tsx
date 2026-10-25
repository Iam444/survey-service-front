import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import { Group } from '@/shared/ui/group';
import { OPTIONS_MAX_QUANTITY } from '../../model/constants/options-max-quantity';
import { PlainOptionConstructor } from './PlainOptionConstructor';
import { PlainOptionCard } from './PlainOptionCard';
import { EditPollOptionDescriptionDialog } from './EditPollOptionDescriptionDialog';
import { OptionList } from './OptionList';
import type { FC } from 'react';
import type { TPollPlainOption } from '@/entities/survey-poll';
import type { IPlainOptionsManagerProps } from './PlainOptionsManager.props';

export const PlainOptionsManager: FC<IPlainOptionsManagerProps> = ({ options, onOptionsUpdate, children }) => {
    const [addedCardsCounter, setAddedCardsCounter] = useState(() => {
        let maxCounterValue = 1;

        options.forEach((option) => {
            maxCounterValue = Math.max(option.id, maxCounterValue);
        });

        return maxCounterValue;
    });

    const [isAnyOptionEditing, setIsAnyOptionEditing] = useState(false);
    const [showOptionConstructor, setShowOptionConstructor] = useState(false);

    const handleOptionCreate = (optionName: TPollPlainOption['name']): void => {
        setAddedCardsCounter((prevState) => prevState + 1);
        setShowOptionConstructor(false);
        onOptionsUpdate((prevState) => [...prevState, { id: addedCardsCounter, name: optionName, description: null }]);
    };

    const handleOptionUpdate = (optionId: TPollPlainOption['id'], optionData: Partial<TPollPlainOption>): void => {
        onOptionsUpdate((prevState) => prevState.map((option) => (option.id === optionId ? { ...option, ...optionData } : option)));
    };

    const handleOptionDelete = (optionId: TPollPlainOption['id']): void => {
        onOptionsUpdate((prevState) => prevState.filter((option) => option.id !== optionId));
    };

    const checkIfOptionNameUnique = (optionName: TPollPlainOption['name'], optionId?: TPollPlainOption['id']): boolean =>
        options.every((option) => option.name !== optionName || (optionId && option.id === optionId));

    const isOptionListOverflowed = options.length >= OPTIONS_MAX_QUANTITY || (options.length === OPTIONS_MAX_QUANTITY - 1 && showOptionConstructor);
    const isStepCompleted = options.length > 1 && !isAnyOptionEditing && !showOptionConstructor;

    return (
        <>
            <Group direction="column" gap="12">
                <OptionList options={options}>
                    {(option) => (
                        <PlainOptionCard
                            id={option.id}
                            name={option.name}
                            description={option.description}
                            checkIfOptionNameUnique={checkIfOptionNameUnique}
                            onOptionEditingStateChange={setIsAnyOptionEditing}
                            onOptionNameEnter={(optionId, name) => handleOptionUpdate(optionId, { name })}
                            onOptionDelete={handleOptionDelete}
                        />
                    )}
                </OptionList>

                {showOptionConstructor && (
                    <Group direction="column">
                        <PlainOptionConstructor
                            checkIfOptionNameUnique={checkIfOptionNameUnique}
                            onOptionCreate={handleOptionCreate}
                            onOptionCreationCancel={() => setShowOptionConstructor(false)}
                        />
                    </Group>
                )}

                <Button variant="transparent" size="medium" disabled={isOptionListOverflowed} onClick={() => setShowOptionConstructor(true)}>
                    <Icon name="plus" size="small" />
                    Добавить вариант
                </Button>
            </Group>

            {children(isStepCompleted)}

            <EditPollOptionDescriptionDialog onOptionDescriptionUpdate={(id, description) => handleOptionUpdate(id, { description })} />
        </>
    );
};
