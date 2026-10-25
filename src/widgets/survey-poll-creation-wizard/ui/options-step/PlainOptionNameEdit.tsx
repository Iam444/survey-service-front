import { useState } from 'react';
import { TextInput } from '@/shared/ui/text-input';
import styles from './PlainOptionNameEdit.module.scss';
import type { FC, ChangeEvent } from 'react';
import type { IPlainOptionNameEditProps } from './PlainOptionNameEdit.props';

export const PlainOptionNameEdit: FC<IPlainOptionNameEditProps> = ({ hasError, name, onNameChange, onNameEnter }) => {
    const [nameValue, setNameValue] = useState(name);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;

        setNameValue(value);
        onNameChange(value.trim());
    };

    return (
        <TextInput
            autoFocus
            value={nameValue}
            isInvalid={hasError}
            onChange={handleInputChange}
            onBlur={(e) => onNameEnter(e.target.value.trim())}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === 'Escape') && e.currentTarget.blur()}
            className={styles.PlainOptionNameEdit}
        />
    );
};
