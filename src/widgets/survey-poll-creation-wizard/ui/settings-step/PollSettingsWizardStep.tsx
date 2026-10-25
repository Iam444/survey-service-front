import { Typography } from '@/shared/ui/typography';
import { Group } from '@/shared/ui/group';
import { Wizard } from '@/shared/ui/wizard';
import { LabeledCheckbox } from '@/shared/ui/labeled-checkbox';
import { PollStatisticsDisplayFormatEnum, PollStatisticsAccessTypeEnum, PollAccessTypeEnum } from '@/entities/survey-poll';
import { AccessSettings } from './AccessSettings';
import styles from './PollSettingsWizardStep.module.scss';
import { StatisticsSettings } from './StatisticsSettings';
import type { FC, ChangeEvent } from 'react';
import type { TPollAccessSettings, TPollStatisticsSettings } from '@/entities/survey-poll';
import type { IPollSettingsWizardStepProps } from './PollSettingsWizardStep.props';

export const PollSettingsWizardStep: FC<IPollSettingsWizardStepProps> = ({ pollSettings, onStepDataUpdate }) => {
    const handleMultiChoiceCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onStepDataUpdate((prevState) => ({
            ...prevState,
            isMultiChoiceEnabled: e.target.checked,
        }));
    };

    const handleAccessSettingsUpdate = (action: (prevState: TPollAccessSettings) => TPollAccessSettings): void => {
        onStepDataUpdate((prevState) => {
            const accessSettings = action(prevState.accessSettings);
            let statisticsSettings;

            if (
                accessSettings.type === PollAccessTypeEnum.SPECIFIED &&
                prevState.statisticsSettings.displayFormat !== PollStatisticsDisplayFormatEnum.NONE &&
                prevState.statisticsSettings.accessSettings.type === PollStatisticsAccessTypeEnum.SPECIFIED
            ) {
                statisticsSettings = {
                    ...prevState.statisticsSettings,
                    accessSettings: {
                        ...prevState.statisticsSettings.accessSettings,
                        holders: prevState.statisticsSettings.accessSettings.holders.filter((user) =>
                            accessSettings.holders.some((item) => item.id === user.id),
                        ),
                    },
                };
            }

            return {
                ...prevState,
                accessSettings,
                statisticsSettings: statisticsSettings || prevState.statisticsSettings,
            };
        });
    };

    const handleStatisticsSettingsUpdate = (action: (prevStatisticsSettings: TPollStatisticsSettings) => TPollStatisticsSettings): void => {
        onStepDataUpdate((prevState) => ({
            ...prevState,
            statisticsSettings: action(prevState.statisticsSettings),
        }));
    };

    const pollAccessHolders = pollSettings.accessSettings.type === PollAccessTypeEnum.SPECIFIED ? pollSettings.accessSettings.holders : undefined;

    let isStepCompleted = true;

    if (
        pollSettings.statisticsSettings.displayFormat !== PollStatisticsDisplayFormatEnum.NONE &&
        pollSettings.statisticsSettings.accessSettings.type === PollStatisticsAccessTypeEnum.SPECIFIED &&
        pollSettings.statisticsSettings.accessSettings.holders.length === 0
    ) {
        isStepCompleted = false;
    }

    if (pollSettings.accessSettings.type === PollAccessTypeEnum.SPECIFIED && pollSettings.accessSettings.holders.length === 0) {
        isStepCompleted = false;
    }

    return (
        <>
            <Typography element="h2" type="title" size="extraLarge" weight="extraLight" className={styles.PollSettingsWizardStepTitle}>
                Настройки опроса
            </Typography>

            <Group direction="column" gap="18">
                <LabeledCheckbox checked={pollSettings.isMultiChoiceEnabled} onChange={handleMultiChoiceCheckboxChange}>
                    Множественный выбор
                </LabeledCheckbox>

                <AccessSettings accessSettings={pollSettings.accessSettings} onAccessSettingsUpdate={handleAccessSettingsUpdate} />

                <StatisticsSettings
                    statisticsSettings={pollSettings.statisticsSettings}
                    onSettingsUpdate={handleStatisticsSettingsUpdate}
                    pollAccessHolders={pollAccessHolders}
                />
            </Group>

            <Group direction="column" gap="12" className={styles.PollSettingsWizardStepControls}>
                <Wizard.NextButton variant="solid" size="medium" disabled={!isStepCompleted}>
                    Продолжить
                </Wizard.NextButton>
            </Group>
        </>
    );
};
