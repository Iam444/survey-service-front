import { Select } from '@base-ui/react/select';
import { Typography } from '@/shared/ui/typography';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './SelectItemText.module.scss';
import type { FC } from 'react';
import type { TSelectItemTextProps } from './SelectItemText.props';

export const SelectItemText: FC<TSelectItemTextProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.SelectItemText, className);

    return <Select.ItemText render={<Typography type="text" size={props.size} />} className={finalClassName} {...props} />;
};
