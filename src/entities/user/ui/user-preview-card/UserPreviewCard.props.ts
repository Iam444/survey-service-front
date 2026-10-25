import type { PropsWithChildren } from 'react';
import type { TUser } from '../../model/types/user.interface';

export interface IUserPreviewCardProps extends PropsWithChildren {
    user: TUser;
}
