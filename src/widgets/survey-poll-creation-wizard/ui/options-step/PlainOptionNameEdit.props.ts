import type { TPollPlainOption } from '@/entities/survey-poll';

export interface IPlainOptionNameEditProps {
    hasError: boolean;
    name: TPollPlainOption['name'];
    onNameChange: (name: TPollPlainOption['name']) => void;
    onNameEnter: (name: TPollPlainOption['name']) => void;
}
