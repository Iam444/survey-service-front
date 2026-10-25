import { ButtonLayout } from '@/shared/ui/button-layout';
import { LoadingIndicator } from '@/shared/ui/laoding-indicator';
import type { FC } from 'react';
import type { IButtonProps } from './Button.props';

export const Button: FC<IButtonProps> = ({ variant, size, isRounded, isLoading = false, disabled, type = 'button', children, ...props }) => {
    return (
        <ButtonLayout variant={variant} size={size} isRounded={isRounded}>
            <button type={type} disabled={isLoading || disabled} {...props}>
                {isLoading ? (
                    <>
                        Загрузка...
                        <LoadingIndicator size="small" />
                    </>
                ) : (
                    children
                )}
            </button>
        </ButtonLayout>
    );
};
