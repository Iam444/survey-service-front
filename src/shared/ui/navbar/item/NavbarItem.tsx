import { joinStyles } from '@/shared/lib/join-styles';
import styles from './NavbarItem.module.scss';
import type { FC } from 'react';
import type { TNavbarItemProps } from './NavbarItem.props';

export const NavbarItem: FC<TNavbarItemProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.NavbarItem, className);

    return (
        <li className={finalClassName} {...props}>
            {children}
        </li>
    );
};
