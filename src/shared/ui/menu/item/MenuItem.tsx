import { Menu } from '@base-ui/react/menu';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './MenuItem.module.scss';
import type { FC } from 'react';
import type { TMenuItemProps } from './MenuItem.props';

export const MenuItem: FC<TMenuItemProps> = ({ className, children, ...props }) => {
    const finalClassName = joinStyles(styles.MenuItem, className);

    return (
        <Menu.Item className={finalClassName} {...props}>
            {children}
        </Menu.Item>
    );
};
