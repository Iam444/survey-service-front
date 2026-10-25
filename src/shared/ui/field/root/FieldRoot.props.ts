import type { HTMLAttributes } from 'react';
import type { IFieldValidator } from '@/shared/ui/field';

export interface IFieldRootProps extends HTMLAttributes<HTMLDivElement> {
    validators?: IFieldValidator[];
    isRequired?: boolean | undefined;
}
