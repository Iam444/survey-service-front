import { Combobox } from '@base-ui/react/combobox';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './ComboboxItem.module.scss';
import type { FC } from 'react';
import type { TComboboxItemProps } from './ComboboxItem.props';

export const ComboboxItem: FC<TComboboxItemProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.ComboboxItem, className);

    return <Combobox.Item className={finalClassName} {...props} />;
};
