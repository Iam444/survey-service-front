import { hashString } from '@/shared/lib/hash-string';
import { UserAvatarColors } from '../model/constants/user-avatar-colors';
import type { TUser } from '@/entities/user';
import type { TUserAvatarColor } from '../model/types/user-avatar-color.type';

export const getColorByUserId = (id: TUser['id']): TUserAvatarColor => {
    const hash = hashString(id);
    const index = hash % UserAvatarColors.length;

    return UserAvatarColors[index];
};
