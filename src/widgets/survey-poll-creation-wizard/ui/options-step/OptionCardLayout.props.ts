import type { PropsWithChildren } from 'react';

export interface IOptionCardLayoutProps extends PropsWithChildren {
    errorMessage?: string | null;
    onOptionDescriptionEdit?: () => void;
    onOptionDelete?: () => void;
}
