import { joinStyles } from '@/shared/lib/join-styles';
import styles from './Checkbox.module.scss';
import type { FC } from 'react';
import type { ICheckboxProps } from './Checkbox.props';

export const Checkbox: FC<ICheckboxProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.Checkbox, className);

    return <input type="checkbox" className={finalClassName} {...props} />;
};
