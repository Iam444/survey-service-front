import { joinStyles } from '@/shared/lib/join-styles';
import styles from './NavbarList.module.scss';
import type { FC } from 'react';
import type { TNavbarListProps } from './NavbarList.props';

export const NavbarList: FC<TNavbarListProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.NavbarList, className);

    return (
        <ul className={finalClassName} {...props}>
            {children}
        </ul>
    );
};
