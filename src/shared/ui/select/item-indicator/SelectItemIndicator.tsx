import { Select } from '@base-ui/react/select';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './SelectItemIndicator.module.scss';
import type { FC } from 'react';
import type { TSelectItemIndicatorProps } from './SelectItemIndicator.props';

export const SelectItemIndicator: FC<TSelectItemIndicatorProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.SelectItemIndicator, (state) => state.selected && styles.selected, className);

    return <Select.ItemIndicator className={finalClassName} {...props} />;
};
