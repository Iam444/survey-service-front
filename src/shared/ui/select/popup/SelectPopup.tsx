import { Select } from '@base-ui/react/select';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './SelectPopup.module.scss';
import type { FC } from 'react';
import type { TSelectPopupProps } from './SelectPopup.props';

export const SelectPopup: FC<TSelectPopupProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.SelectPopup, className);

    return <Select.Popup className={finalClassName} {...props} />;
};
