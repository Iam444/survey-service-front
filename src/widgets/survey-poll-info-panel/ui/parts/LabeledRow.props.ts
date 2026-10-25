import type { PropsWithChildren } from 'react';

export interface ILabeledRowProps extends PropsWithChildren {
    label: string;
    shouldAlignTop?: boolean;
}
