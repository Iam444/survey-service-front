import { Toast } from '@base-ui/react';
import { Typography } from '@/shared/ui/typography';
import { Group } from '@/shared/ui/group';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import { PagesMap } from '@/shared/config/routes';
import styles from './GlobalToast.module.scss';
import type { FC } from 'react';
import type { IGlobalToastProps } from './GlobalToast.props';

export const GlobalToast: FC<IGlobalToastProps> = ({ toast }) => {
    return (
        <Toast.Root key={toast.id} toast={toast} className={styles.GlobalToast}>
            <Toast.Content className={styles.GlobalToastContent}>
                <Group gap="12" justify="between" align="start">
                    <Toast.Title
                        render={
                            <Typography element="h2" type="title" size="small" weight="semiBold" className={styles.GlobalToastTitle}>
                                {toast.title}
                            </Typography>
                        }
                    />

                    <Toast.Close
                        className={styles.GlobalToastClose}
                        render={
                            <Button variant="iconOnly" size="small">
                                <Icon name="cross" size="extraSmall" />
                            </Button>
                        }
                    />
                </Group>

                <Toast.Description
                    render={
                        <Typography element="p" type="text" size="medium">
                            {toast.description}
                        </Typography>
                    }
                />

                <Group gap="12">
                    {toast.data?.useReloadFallbackButton && (
                        <Button variant="themed" size="small" onClick={() => globalThis.location.reload()} className={styles.GlobalToastButton}>
                            Обновить
                        </Button>
                    )}

                    {toast.data?.useHomeFallbackButton && (
                        <Button
                            variant="themed"
                            size="small"
                            onClick={() => globalThis.location.replace(PagesMap.Polls.getRoute())}
                            className={styles.GlobalToastButton}
                        >
                            К опросам
                        </Button>
                    )}
                </Group>
            </Toast.Content>
        </Toast.Root>
    );
};
