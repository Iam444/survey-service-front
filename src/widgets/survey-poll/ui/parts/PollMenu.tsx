import { Menu } from '@/shared/ui/menu';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import { PagesMap } from '@/shared/config/routes';
import { LoadingIndicator } from '@/shared/ui/laoding-indicator';
import { PollStatusEnum } from '@/entities/survey-poll';
import { useViewer } from '@/entities/user';
import { editPollDialogHandler } from '../../model/constants/edit-poll-dialog-handler';
import styles from './PollMenu.module.scss';
import type { FC } from 'react';
import type { IPollMenuProps } from './PollMenu.props';

export const PollMenu: FC<IPollMenuProps> = ({ pollId, pollStatus, pollAuthorId, onPollPublish, onPollClose }: IPollMenuProps) => {
    const { data: viewer, isFetching } = useViewer();

    return (
        <Menu.Root modal={false}>
            <Menu.Trigger
                render={
                    <Button variant="iconOnly" size="medium">
                        <Icon name="ellipsis" size="medium" />
                    </Button>
                }
                className={styles.PollMenuTrigger}
            />

            <Menu.Portal>
                <Menu.Positioner sideOffset={2}>
                    <Menu.Popup>
                        {!viewer || isFetching ? (
                            <LoadingIndicator size="medium" className={styles.PollMenuLoadingIndicator} />
                        ) : (
                            <>
                                {pollStatus === PollStatusEnum.CREATED && viewer.id === pollAuthorId && (
                                    <>
                                        <Menu.Item onClick={() => editPollDialogHandler.open(null)}>
                                            <Typography type="text" size="medium">
                                                Редактировать
                                            </Typography>
                                        </Menu.Item>

                                        <Menu.Item onClick={onPollPublish}>
                                            <Typography type="text" size="medium">
                                                Опубликовать
                                            </Typography>
                                        </Menu.Item>
                                    </>
                                )}

                                {pollStatus === PollStatusEnum.OPENED && (
                                    <>
                                        {viewer.id === pollAuthorId && (
                                            <Menu.Item onClick={onPollClose}>
                                                <Typography type="text" size="medium">
                                                    Завершить
                                                </Typography>
                                            </Menu.Item>
                                        )}

                                        <Menu.LinkItem to={PagesMap.PollResults.getRoute(pollId)}>Результаты</Menu.LinkItem>
                                    </>
                                )}

                                {pollStatus === PollStatusEnum.CLOSED && (
                                    <>
                                        <Menu.LinkItem to={PagesMap.PollResults.getRoute(pollId)}>Результаты</Menu.LinkItem>
                                    </>
                                )}
                            </>
                        )}
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    );
};
