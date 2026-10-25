import type { TUser } from '@/entities/user';

export const getUserFullName = (user: TUser): string => {
    return user.surname ? `${user.name}  ${user.surname}` : user.name;
};
