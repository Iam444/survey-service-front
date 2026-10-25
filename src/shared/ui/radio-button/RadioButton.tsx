import { joinStyles } from '@/shared/lib/join-styles';
import styles from './RadioButton.module.scss';
import type { FC } from 'react';
import type { TRadioButtonProps } from './RadioButton.props';

export const RadioButton: FC<TRadioButtonProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.RadioButton, className);

    return <input type="radio" className={finalClassName} {...props} />;
};
