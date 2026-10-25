import { joinStyles } from '@/shared/lib/join-styles';
import styles from './NavbarRoot.module.scss';
import type { FC } from 'react';
import type { TNavbarRootProps } from './NavbarRoot.props';

export const NavbarRoot: FC<TNavbarRootProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.NavbarRoot, className);

    return (
        <nav className={finalClassName} {...props}>
            {children}
        </nav>
    );
};
