import { Button } from '@/shared/ui/button';
import { useWizard } from '@/shared/ui/wizard';
import type { FC, MouseEvent } from 'react';
import type { TWizardPrevButtonProps } from './WizardPrevButton.props';

export const WizardPrevButton: FC<TWizardPrevButtonProps> = ({ onClick, ...props }) => {
    const { returnToPrevStep } = useWizard();

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
        returnToPrevStep();
        onClick?.(e);
    };

    return <Button {...props} onClick={handleButtonClick} />;
};
