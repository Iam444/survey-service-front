import type { ButtonHTMLAttributes } from 'react';
import type { IButtonLayoutProps } from '@/shared/ui/button-layout';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, Omit<IButtonLayoutProps, 'className' | 'children'> {
    isLoading?: boolean;
}
