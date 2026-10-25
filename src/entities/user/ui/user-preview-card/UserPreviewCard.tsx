import { Link } from 'react-router-dom';
import { Group } from '@/shared/ui/group';
import { Typography } from '@/shared/ui/typography';
import { ButtonLayout } from '@/shared/ui/button-layout';
import { PreviewCard } from '@/shared/ui/preview-card';
import { UserAvatar } from '@/entities/user';
import styles from './UserPreviewCard.module.scss';
import type { FC } from 'react';
import type { IUserPreviewCardProps } from './UserPreviewCard.props';

export const UserPreviewCard: FC<IUserPreviewCardProps> = ({ user, children }) => {
    return (
        <PreviewCard.Root>
            <PreviewCard.Trigger>{children}</PreviewCard.Trigger>

            <PreviewCard.Portal>
                <PreviewCard.Positioner sideOffset={0}>
                    <PreviewCard.Popup>
                        <Group gap="12" className={styles.UserPreviewCardTopSection}>
                            <Link to="/" onClick={(e) => e.preventDefault()} style={{ cursor: 'not-allowed' }}>
                                <UserAvatar user={user} size="extraLarge" />
                            </Link>

                            <Group direction="column">
                                <Typography type="title" size="small" weight="medium">
                                    {user.fullName}
                                </Typography>

                                <Link to={`mailto:${user.email}`} className={styles.UserPreviewCardEmail}>
                                    <Typography type="text" size="small">
                                        {user.email}
                                    </Typography>
                                </Link>
                            </Group>
                        </Group>

                        <Group gap="12" className={styles.UserPreviewCardBottomSection}>
                            <ButtonLayout variant="themed" size="small">
                                <Link to="/" onClick={(e) => e.preventDefault()} style={{ cursor: 'not-allowed' }}>
                                    Смотреть профиль
                                </Link>
                            </ButtonLayout>

                            <ButtonLayout variant="themed" size="small">
                                <Link to="/" onClick={(e) => e.preventDefault()} style={{ cursor: 'not-allowed' }}>
                                    Настройки профиля
                                </Link>
                            </ButtonLayout>
                        </Group>
                    </PreviewCard.Popup>
                </PreviewCard.Positioner>
            </PreviewCard.Portal>
        </PreviewCard.Root>
    );
};
