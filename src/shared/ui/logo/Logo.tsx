import { joinStyles } from '@/shared/lib/join-styles';
import SVGLogo from './assets/logo.svg?react';
import styles from './Logo.module.scss';
import type { FC } from 'react';
import type { ILogoProps } from './Logo.props';

export const Logo: FC<ILogoProps> = ({ size, className, ...props }) => {
    const finalClassName = joinStyles(styles.Logo, styles[`size-${size}`], className);

    return <SVGLogo className={finalClassName} {...props} />;
};
