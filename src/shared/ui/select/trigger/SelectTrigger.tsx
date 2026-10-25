import { Select } from '@base-ui/react/select';
import { Button } from '@/shared/ui/button';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './SelectTrigger.module.scss';
import type { FC } from 'react';
import type { TSelectTriggerProps } from './SelectTrigger.props';

export const SelectTrigger: FC<TSelectTriggerProps> = ({ render, className, variant = 'themed', size = 'medium', ...props }) => {
    const finalClassName = joinStyles(styles.SelectTrigger, className);

    return <Select.Trigger render={render || <Button variant={variant} size={size} />} className={finalClassName} {...props} />;
};
