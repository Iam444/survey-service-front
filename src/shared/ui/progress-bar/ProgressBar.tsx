import { joinStyles } from '@/shared/lib/join-styles';
import styles from './ProgressBar.module.scss';
import type { FC } from 'react';
import type { IProgressBarProps } from './ProgressBar.props';

export const ProgressBar: FC<IProgressBarProps> = ({ value, max, className, ...props }) => {
    const finalClassName = joinStyles(styles.root, className);

    return <progress className={finalClassName} max={max} value={value} {...props} />;
};
