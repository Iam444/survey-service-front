import { joinStyles } from '@/shared/lib/join-styles';
import styles from './LoadingIndicator.module.scss';
import type { FC } from 'react';
import type { ILoadingIndicatorProps } from './LoadingIndicator.props';

export const LoadingIndicator: FC<ILoadingIndicatorProps> = ({ size, className, ...props }) => {
    const finalClassName = joinStyles(styles.LoadingIndicator, styles[`size-${size}`], className);

    return (
        <div className={finalClassName} {...props}>
            <div className={styles.LoadingIndicatorSpinner}></div>
        </div>
    );
};
