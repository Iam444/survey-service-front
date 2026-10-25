import { useState } from 'react';
import { OptionCardLayout } from './OptionCardLayout';
import { PlainOptionNameEdit } from './PlainOptionNameEdit';
import type { FC } from 'react';
import type { TPollPlainOption } from '@/entities/survey-poll';
import type { IPlainOptionConstructorProps } from './PlainOptionConstructor.props';

export const PlainOptionConstructor: FC<IPlainOptionConstructorProps> = ({ checkIfOptionNameUnique, onOptionCreate, onOptionCreationCancel }) => {
    const [hasError, setHasError] = useState(false);

    const handleNameChange = (name: TPollPlainOption['name']): void => {
        if (name) {
            setHasError(!checkIfOptionNameUnique(name));
        }
    };

    const handleNameEnter = (name: TPollPlainOption['name']): void => {
        if (!name) {
            onOptionCreationCancel();

            return;
        }

        const isUnique = checkIfOptionNameUnique(name);

        if (isUnique) {
            onOptionCreate(name);
        } else {
            onOptionCreationCancel();
        }
    };

    return (
        <OptionCardLayout errorMessage={hasError ? 'Имя опции должно быть уникальным' : null}>
            <PlainOptionNameEdit hasError={hasError} name={''} onNameChange={handleNameChange} onNameEnter={handleNameEnter} />
        </OptionCardLayout>
    );
};
