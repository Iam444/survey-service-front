import { Menu } from '@base-ui/react/menu';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './MenuPopup.module.scss';
import type { FC } from 'react';
import type { TMenuPopupProps } from './MenuPopup.props';

export const MenuPopup: FC<TMenuPopupProps> = ({ className, ...props }) => {
    const finalClassName = joinStyles(styles.MenuPopup, className);

    return <Menu.Popup className={finalClassName} {...props} />;
};
