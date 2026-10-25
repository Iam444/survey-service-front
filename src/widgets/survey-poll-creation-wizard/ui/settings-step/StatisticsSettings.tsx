import { LabeledCheckbox } from '@/shared/ui/labeled-checkbox';
import { Group } from '@/shared/ui/group';
import { PlainSelect } from '@/shared/ui/plain-select';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { PollStatisticsDisplayFormatEnum, PollStatisticsAccessTypeEnum } from '@/entities/survey-poll';
import {
    PollStatisticsDisplayFormatOptions,
    DefaultPollStatisticsDisplayFormatOption,
} from '../../model/constants/poll-statistics-display-format-options';
import { StatisticsAccessSettings } from './StatisticsAccessSettings';
import styles from './StatisticsSettings.module.scss';
import type { FC, ChangeEvent } from 'react';
import type { TPollStatisticsDisplayFormat, TPollStatisticsAccessSettings } from '@/entities/survey-poll';
import type { IStatisticsSettingsProps } from './StatisticsSettings.props';

export const StatisticsSettings: FC<IStatisticsSettingsProps> = ({
    statisticsSettings,
    onSettingsUpdate,
    pollAccessHolders,
}: IStatisticsSettingsProps) => {
    const handleDisplayFormatSelect = (displayFormat: TPollStatisticsDisplayFormat | null): void => {
        onSettingsUpdate((prevState) => {
            displayFormat ??= DefaultPollStatisticsDisplayFormatOption.value;

            if (displayFormat === prevState.displayFormat) {
                return { ...prevState };
            } else {
                return displayFormat === PollStatisticsDisplayFormatEnum.NONE
                    ? { displayFormat }
                    : { displayFormat, accessSettings: { type: PollStatisticsAccessTypeEnum.PUBLIC }, shouldShowAfterVoting: true };
            }
        });
    };

    const handleShowAfterVotingFlagChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onSettingsUpdate((prevState) => ({ ...prevState, shouldShowAfterVoting: e.target.checked }));
    };

    const handleStatisticsAccessSettingsUpdate = (action: (prevSettings: TPollStatisticsAccessSettings) => TPollStatisticsAccessSettings): void => {
        onSettingsUpdate((prevState) => {
            if (prevState.displayFormat === PollStatisticsDisplayFormatEnum.NONE) {
                return prevState;
            }

            return { ...prevState, accessSettings: action(prevState.accessSettings) };
        });
    };

    return (
        <div className={styles.StatisticsSettings}>
            <Group gap="4" direction="column">
                <Typography element="label" type="text" size="small" color="weak">
                    Отображение статистики
                </Typography>

                <PlainSelect
                    value={statisticsSettings.displayFormat}
                    options={PollStatisticsDisplayFormatOptions}
                    onOptionSelect={handleDisplayFormatSelect}
                >
                    {(valueRender) => (
                        <Button variant="themed" size="medium">
                            {valueRender}
                        </Button>
                    )}
                </PlainSelect>
            </Group>

            {statisticsSettings.displayFormat !== PollStatisticsDisplayFormatEnum.NONE && (
                <>
                    <Group direction="column" gap="8">
                        <StatisticsAccessSettings
                            statisticsAccessSettings={statisticsSettings.accessSettings}
                            onStatisticsAccessSettingsUpdate={handleStatisticsAccessSettingsUpdate}
                            pollAccessHolders={pollAccessHolders}
                        />
                    </Group>

                    {statisticsSettings.accessSettings.type !== PollStatisticsAccessTypeEnum.PRIVATE && (
                        <LabeledCheckbox checked={statisticsSettings.shouldShowAfterVoting} onChange={handleShowAfterVotingFlagChange}>
                            Показывать статистику сразу после участия в опросе
                        </LabeledCheckbox>
                    )}
                </>
            )}
        </div>
    );
};
