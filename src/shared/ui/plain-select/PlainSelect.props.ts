import type { ReactElement } from 'react';
import type { ISelectOption } from '@/shared/ui/select';

export interface IPlainSelectProps<
    TOption extends ISelectOption<TValue>,
    TDefaultOption extends TOption,
    TValue extends string = TOption extends ISelectOption<infer R> ? R : never,
> {
    alignItemWithTrigger?: boolean;
    value?: TValue | null;
    defaultOption?: TDefaultOption | null;
    options: TOption[];
    onOptionSelect: (optionValue: TValue | null) => void;
    children: (valueRender: ReactElement) => ReactElement;
}
