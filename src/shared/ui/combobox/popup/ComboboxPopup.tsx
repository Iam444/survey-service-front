import { Combobox } from '@base-ui/react/combobox';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './ComboboxPopup.module.scss';
import type { FC } from 'react';
import type { TComboboxPopupProps } from './ComboboxPopup.props';

export const ComboboxPopup: FC<TComboboxPopupProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.ComboboxPopup, className);

    return <Combobox.Popup className={finalClassName} {...props} />;
};
