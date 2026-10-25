import type { TPollPlainOption } from '@/entities/survey-poll';

export interface IPlainOptionConstructorProps {
    checkIfOptionNameUnique: (name: TPollPlainOption['name'], optionId?: TPollPlainOption['id']) => boolean;
    onOptionCreate: (name: TPollPlainOption['name']) => void;
    onOptionCreationCancel: () => void;
}
