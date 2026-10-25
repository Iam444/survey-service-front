import type { TIconName } from '@/shared/ui/icon';

export interface ISelectOption<T extends string = string> {
    value: T;
    label: string;
    description?: string;
    iconName?: TIconName;
}
