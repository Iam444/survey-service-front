import { joinStyles } from '@/shared/lib/join-styles';
import styles from './Typography.module.scss';
import type { ReactElement, ElementType } from 'react';
import type { TTypographyProps } from './Typography.props';
import type { TTypographyElement } from './types';

export function Typography<TElement extends TTypographyElement>({
    element,
    type,
    size,
    color = 'default',
    weight = 'regular',
    align,
    whitespace,
    maxLines,
    useTruncation = false,
    className,
    children,
    ...props
}: TTypographyProps<TElement>): ReactElement {
    const Component = (element || 'span') as ElementType;

    const finalClassName = joinStyles(
        styles.Typography,
        styles[`${type}`],
        styles[`size-${size}`],
        styles[`color-${color}`],
        weight && styles[`weight-${weight}`],
        align && styles[`align-${align}`],
        whitespace && styles[`whitespace-${whitespace}`],
        maxLines && styles[`maxLines-${maxLines}`],
        useTruncation && styles.truncated,
        className,
    );

    return (
        <Component className={finalClassName} {...props}>
            {children}
        </Component>
    );
}
