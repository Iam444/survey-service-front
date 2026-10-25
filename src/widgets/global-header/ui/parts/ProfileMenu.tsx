import { Menu } from '@/shared/ui/menu';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { Skeleton } from '@/shared/ui/skeleton';
import { UserAvatar, useViewer } from '@/entities/user';
import { useLogOut } from '@/widgets/global-header/ui/model/use-log-out';
import styles from './ProfileMenu.module.scss';
import type { FC } from 'react';

export const ProfileMenu: FC = () => {
    const { data: viewer, isFetching } = useViewer();
    const logOut = useLogOut();

    if (!viewer || isFetching) {
        return <Skeleton className={styles.ProfileMenuAvatarSkeleton} />;
    }

    return (
        <Menu.Root>
            <Menu.Trigger
                render={
                    <Button variant="iconOnly" size="small" isRounded>
                        <UserAvatar user={viewer} size="medium" />
                    </Button>
                }
            />

            <Menu.Portal>
                <Menu.Positioner sideOffset={2}>
                    <Menu.Popup>
                        <Menu.LinkItem to="/" onClick={(e) => e.preventDefault()} style={{ cursor: 'not-allowed' }}>
                            <Typography type="text" size="medium">
                                Профиль
                            </Typography>
                        </Menu.LinkItem>

                        <Menu.Item onClick={() => logOut()}>
                            <Typography type="text" size="medium">
                                Выйти
                            </Typography>
                        </Menu.Item>
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    );
};
