import type { HTMLAttributes } from 'react';
import type { TUser } from '@/entities/user';
import type { TUserAvatarSize } from '../../model/types/user-avatar-size.type';

export interface IUserAvatarProps extends HTMLAttributes<HTMLDivElement> {
    user: Pick<TUser, 'id' | 'name' | 'surname' | 'avatarUrl'>;
    size: TUserAvatarSize;
}
