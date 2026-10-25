import type { TPollPlainOption } from '@/entities/survey-poll';

export interface IPlainOptionCardProps extends TPollPlainOption {
    checkIfOptionNameUnique: (name: TPollPlainOption['name'], optionId?: TPollPlainOption['id']) => boolean;
    onOptionEditingStateChange: (isOptionEditing: boolean) => void;
    onOptionNameEnter: (optionId: TPollPlainOption['id'], name: TPollPlainOption['name']) => void;
    onOptionDelete: (optionId: TPollPlainOption['id']) => void;
}
