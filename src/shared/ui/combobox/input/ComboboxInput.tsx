import { Combobox } from '@base-ui/react';
import { TextInput } from '@/shared/ui/text-input';
import type { FC } from 'react';
import type { TComboboxInputProps } from './ComboboxInput.props';

export const ComboboxInput: FC<TComboboxInputProps> = (props) => {
    return <Combobox.Input render={<TextInput />} {...props} />;
};
