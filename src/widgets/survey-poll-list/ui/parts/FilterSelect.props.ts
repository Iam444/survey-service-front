import type { TPollFormat, TPollStatus } from '@/shared/api/types';
import type { ISelectOption } from '@/shared/ui/select';

export interface IFilterSelectProps<T extends TPollFormat | TPollStatus> {
    placeholder: string;
    options: ISelectOption<T>[];
    onOptionSelect: (optionValue: ISelectOption<T>['value'] | null) => void;
}
