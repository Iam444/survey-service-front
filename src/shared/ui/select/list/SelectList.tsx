import { Select } from '@base-ui/react/select';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './SelectList.module.scss';
import type { FC } from 'react';
import type { TSelectListProps } from './SelectList.props';

export const SelectList: FC<TSelectListProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.SelectList, className);

    return <Select.List className={finalClassName} {...props} />;
};
