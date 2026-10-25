import { Select } from '@base-ui/react/select';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './SelectItem.module.scss';
import type { FC } from 'react';
import type { TSelectItemProps } from './SelectItem.props';

export const SelectItem: FC<TSelectItemProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.SelectItem, className);

    return <Select.Item className={finalClassName} {...props} />;
};
