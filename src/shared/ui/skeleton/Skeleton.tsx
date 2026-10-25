import { joinStyles } from '@/shared/lib/join-styles';
import styles from './Skeleton.module.scss';
import type { FC } from 'react';
import type { ISkeletonProps } from './Skeleton.props';

export const Skeleton: FC<ISkeletonProps> = ({ fit, width, className, ...props }) => {
    const finalClassName = joinStyles(styles.Skeleton, fit && styles[`fit-${fit}`], className);

    return <div className={finalClassName} style={{ width }} {...props}></div>;
};
