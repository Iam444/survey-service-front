import { joinStyles } from '@/shared/lib/join-styles';
import { getColorByUserId } from '../../lib/get-color-by-user-id';
import styles from './UserAvatar.module.scss';
import type { FC } from 'react';
import type { IUserAvatarProps } from './UserAvatar.props';

export const UserAvatar: FC<IUserAvatarProps> = ({ user, size, ...props }) => {
    const shortcutAlias = user.surname
        ? user.name.charAt(0).toUpperCase() + user.surname.charAt(0).toUpperCase()
        : user.name.charAt(0).toUpperCase() + user.name.charAt(1).toLowerCase();

    const color = getColorByUserId(user.id);

    const finalClassName = joinStyles(styles.UserAvatar, styles[`size-${size}`], styles[`color-${color}`]);

    return (
        <div className={finalClassName} {...props}>
            {user.avatarUrl ? <img src={user.avatarUrl} alt="Аватар пользователя" className={styles.UserAvatarImage} /> : shortcutAlias}
        </div>
    );
};
