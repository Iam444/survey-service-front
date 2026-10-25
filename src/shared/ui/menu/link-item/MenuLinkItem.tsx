import { Menu } from '@base-ui/react/menu';
import { Link } from 'react-router-dom';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './MenuLinkItem.module.scss';
import type { FC } from 'react';
import type { TMenuMenuLinkItemProps } from './MenuLinkItem.props';

export const MenuLinkItem: FC<TMenuMenuLinkItemProps> = ({ to, className, children, ...props }) => {
    const finalClassName = joinStyles(styles.MenuLinkItem, className);

    return (
        <Menu.LinkItem render={<Link tabIndex={0} to={to} />} className={finalClassName} {...props}>
            {children}
        </Menu.LinkItem>
    );
};
