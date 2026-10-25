import { useId } from 'react';
import { Checkbox } from '@/shared/ui/checkbox';
import { Typography } from '@/shared/ui/typography';
import { Group } from '@/shared/ui/group';
import type { FC } from 'react';
import type { TLabeledCheckboxProps } from './LabeledCheckbox.props';

export const LabeledCheckbox: FC<TLabeledCheckboxProps> = ({ children, ...props }) => {
    const id = useId();

    return (
        <Group gap="12" align="center">
            <Checkbox id={id} {...props} />

            <Typography htmlFor={id} element="label" type="text" size="medium">
                {children}
            </Typography>
        </Group>
    );
};
