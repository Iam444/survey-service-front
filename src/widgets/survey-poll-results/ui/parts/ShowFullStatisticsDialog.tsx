import { Typography } from '@/shared/ui/typography';
import { Group } from '@/shared/ui/group';
import { Dialog } from '@/shared/ui/dialog';
import { UserAvatar, UserPreviewCard } from '@/entities/user';
import { getVoteAliasWithProperEnding } from '../../lib/get-vote-alias-with-proper-ending';
import { showFullStatisticsDialogHandler } from '../../model/constants/show-full-statistics-dialog-handler';
import styles from './ShowFullStatisticsDialog.module.scss';
import type { FC } from 'react';
import type { IShowFullStatisticsDialogProps } from './ShowFullStatisticsDialog.props';

export const ShowFullStatisticsDialog: FC<IShowFullStatisticsDialogProps> = ({ optionStatisticsList }) => {
    return (
        <Dialog.Root handle={showFullStatisticsDialogHandler} modal>
            <Dialog.Portal>
                <Dialog.Backdrop />

                <Dialog.Popup size="small">
                    <Dialog.Header>
                        <Dialog.Title>Голоса пользователей</Dialog.Title>
                        <Dialog.IconedClose />
                    </Dialog.Header>

                    <Dialog.Content>
                        <ul className={styles.OptionStatisticsList}>
                            {optionStatisticsList.map((pollOptionStatistics, index) => (
                                <li key={index} className={styles.OptionStatistics}>
                                    <Group justify="between" gap="18" className={styles.OptionStatisticsHeader}>
                                        <Typography
                                            type="text"
                                            size="large"
                                            color="weak"
                                            weight="medium"
                                            useTruncation
                                            className={styles.OptionStatisticsOptionName}
                                        >
                                            {pollOptionStatistics.option.name}
                                        </Typography>

                                        <Typography type="text" size="medium" color="weak" className={styles.OptionStatisticsVotesQuantity}>
                                            {getVoteAliasWithProperEnding(pollOptionStatistics.votesQuantity)}
                                        </Typography>
                                    </Group>

                                    <ul className={styles.UserVoteList}>
                                        {pollOptionStatistics.votes!.map((vote, index) => (
                                            <li key={index} className={styles.UserVote}>
                                                <UserPreviewCard user={vote.votedBy}>
                                                    <Group align="center" gap="12" className={styles.UserVoteUserPreview}>
                                                        <UserAvatar user={vote.votedBy} size="large" color="red" />

                                                        <Typography type="text" size="large" useTruncation className={styles.UserVoteVoterName}>
                                                            {vote.votedBy.fullName}
                                                        </Typography>
                                                    </Group>
                                                </UserPreviewCard>

                                                <Group direction="column" align="end" gap="4">
                                                    <Typography type="text" size="small" color="weak">
                                                        {new Date(vote.votedAt).toLocaleDateString('ru-RU', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                        })}
                                                    </Typography>
                                                    <Typography type="text" size="small" color="weak">
                                                        {new Date(vote.votedAt).toLocaleTimeString('ru-RU', {
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                        })}
                                                    </Typography>
                                                </Group>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </Dialog.Content>
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
