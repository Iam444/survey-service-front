import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { useWizard } from '@/shared/ui/wizard';
import type { FC, MouseEvent } from 'react';
import type { TWizardNextButtonProps } from './WizardNextButton.props';

export const WizardNextButton: FC<TWizardNextButtonProps> = ({ onClick, isLoading, ...props }) => {
    const [isPending, setIsPending] = useState(false);
    const { proceedNextStep } = useWizard();

    const handleButtonClick = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        onClick?.(e);

        setIsPending(true);

        await proceedNextStep();

        setIsPending(false);
    };

    return <Button isLoading={isLoading || isPending} {...props} onClick={handleButtonClick} />;
};
