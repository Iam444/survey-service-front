import { joinStyles } from '@/shared/lib/join-styles';
import { Typography } from '@/shared/ui/typography';
import { useField } from '@/shared/ui/field/context';
import styles from './FieldLabel.module.scss';
import type { FC } from 'react';
import type { IFieldLabelProps } from './FieldLabel.props';

export const FieldLabel: FC<IFieldLabelProps> = ({ size = 'small', color = 'weak', weight = 'medium', className, children, ...props }) => {
    const { controlId, isRequired } = useField();

    const finalClassName = joinStyles(styles.FieldLabel, isRequired && styles.required, className);

    return (
        <Typography element="label" type="text" size={size} weight={weight} color={color} htmlFor={controlId} className={finalClassName} {...props}>
            {children}
        </Typography>
    );
};
