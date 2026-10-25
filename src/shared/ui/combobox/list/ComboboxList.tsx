import { Combobox } from '@base-ui/react/combobox';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './ComboboxList.module.scss';
import type { FC } from 'react';
import type { TComboboxListProps } from './ComboboxList.props';

export const ComboboxList: FC<TComboboxListProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.ComboboxList, className);

    return <Combobox.List className={finalClassName} {...props} />;
};
