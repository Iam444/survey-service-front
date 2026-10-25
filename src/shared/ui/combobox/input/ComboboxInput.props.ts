import type { ComboboxInputProps } from '@base-ui/react/combobox';
import type { ITextInputProps } from '@/shared/ui/text-input';

export type TComboboxInputProps = Omit<ComboboxInputProps, 'render'> & ITextInputProps;
