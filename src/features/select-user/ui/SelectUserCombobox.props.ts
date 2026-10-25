import type { ITextInputProps } from '@/shared/ui/text-input';
import type { TUser } from '@/entities/user';

export interface ISelectUserComboboxProps {
    searchScope: string;
    useAutoFocus?: boolean;
    useResetOnSelect?: boolean;
    onUserSelect: (user: TUser) => void;
    onComboboxDismiss?: () => void;
    excludedUserIds?: TUser['id'][];
    includedUserIds?: TUser['id'][] | undefined;
    limit?: number;
    placeholder?: ITextInputProps['placeholder'];
}
