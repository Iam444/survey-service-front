import { joinStyles } from '@/shared/lib/join-styles';
import { Typography } from '@/shared/ui/typography';
import { useField } from '../context';
import styles from './FieldInvalidityMessage.module.scss';
import type { FC } from 'react';
import type { IFieldInvalidityMessageProps } from './FieldInvalidityMessage.props';

export const FieldInvalidityMessage: FC<IFieldInvalidityMessageProps> = ({
    rule,
    size = 'small',
    color = 'danger',
    children,
    className,
    ...props
}) => {
    const { violatedRule } = useField();

    if (violatedRule !== rule) {
        return null;
    }

    const finalClassName = joinStyles(styles.FieldInvalidityMessage, className);

    return (
        <Typography element="div" type="text" size={size} color={color} className={finalClassName} {...props}>
            {children}
        </Typography>
    );
};
