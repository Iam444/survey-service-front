import { NavLink } from 'react-router-dom';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './NavbarLink.module.scss';
import type { FC } from 'react';
import type { INavbarLinkProps } from './NavbarLink.props';

export const NavbarLink: FC<INavbarLinkProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.NavbarLink, (props) => props.isActive && styles.active, className);

    return (
        <NavLink className={finalClassName} {...props}>
            {({ isActive }) => <span data-active={isActive ? '' : undefined}>{children}</span>}
        </NavLink>
    );
};
