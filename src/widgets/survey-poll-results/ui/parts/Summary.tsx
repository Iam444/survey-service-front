import { Group } from '@/shared/ui/group';
import { Typography } from '@/shared/ui/typography';
import { Icon } from '@/shared/ui/icon';
import { joinStyles } from '@/shared/lib/join-styles';
import SVGImg from '../assets/img.svg?react';
import styles from './Summary.module.scss';
import type { FC } from 'react';
import type { ISummaryProps } from './Summary.props';

export const Summary: FC<ISummaryProps> = ({ isInMultiChoiceMode, pollSummary }) => {
    const finalViewerSelectionMarkClassName = joinStyles(styles.SummaryViewerSelectionMark, isInMultiChoiceMode && styles.rounded);

    return (
        <>
            {pollSummary ? (
                <>
                    <Group direction="column" gap="12" align="center">
                        <Typography type="title" size="small" color="weak">
                            Лидеры по голосам:
                        </Typography>

                        {pollSummary.leadingOptions.length === 0 ? (
                            <Typography type="text" size="large" useTruncation>
                                Недостаточно голосов для определения лидеров
                            </Typography>
                        ) : (
                            <ul className={styles.SummaryLeadingOptionList}>
                                {pollSummary.leadingOptions.map((option, index) => (
                                    <li key={index} className={styles.SummaryLeadingOption}>
                                        <Icon name="leadership" size="medium" />

                                        <Typography type="text" size="large" useTruncation className={styles.SummaryOptionName}>
                                            {option.name}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Group>

                    {pollSummary.viewerSelection.length > 0 && (
                        <Group direction="column" gap="12" align="center">
                            <Typography type="title" size="small" color="weak">
                                Ваш выбор:
                            </Typography>

                            <ul className={styles.SummaryViewerSelectionOptionList}>
                                {pollSummary.viewerSelection.map((option, index) => (
                                    <li key={index} className={styles.SummaryViewerSelectionOption}>
                                        <div className={finalViewerSelectionMarkClassName}>
                                            <Icon name="checkMark" size="extraSmall" />
                                        </div>

                                        <Typography type="text" size="large" useTruncation className={styles.SummaryOptionName}>
                                            {option.name}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </Group>
                    )}
                </>
            ) : (
                <Group direction="column" gap="18" align="center">
                    <SVGImg className={styles.SummaryNotReadyIcon} />
                    <Typography type="text" size="medium" color="weak" weight="light">
                        Результаты будут доступны после завершения опроса
                    </Typography>
                </Group>
            )}
        </>
    );
};
