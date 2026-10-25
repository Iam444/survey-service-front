import { useState } from 'react';
import { Wizard } from '@/shared/ui/wizard';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import { PollFormatEnum } from '@/entities/survey-poll';
import { DefaultPollAccessTypeOption } from '../model/constants/poll-access-type-options';
import { DefaultPollStatisticsDisplayFormatOption } from '../model/constants/poll-statistics-display-format-options';
import { WizardStepIdsMap } from '../model/constants/wizard-step-ids-map';
import { useCreatePoll } from '../model/hooks/use-create-poll';
import { DefaultPollStatisticsAccessTypeOption } from '../model/constants/poll-statistics-access-type-options';
import { formatPollData } from '../lib/format-poll-data';
import { PollSettingsWizardStep } from './settings-step/PollSettingsWizardStep';
import { PollGeneralDataStep } from './general-data-step/PollGeneralDataStep';
import styles from './PollCreationWizard.module.scss';
import { PollOptionsStep } from './options-step/PollOptionsStep';
import type { FC } from 'react';
import type { TPollSettings } from '@/entities/survey-poll';
import type { TPollGeneralData } from '../model/types/poll-general-data.type';
import type { TPollCreationData } from '../model/types/poll-creation-data.type';
import type { TPollOptionListWithFormat } from '../model/types/poll-option-list-with-format.type';
import type { ISurveyPollCreationWizardProps } from './PollCreationWizard.props';

export const PollCreationWizard: FC<ISurveyPollCreationWizardProps> = ({ onPollCreate, onPollCreationCancel }) => {
    const [pollCreationData, setPollCreationData] = useState<TPollCreationData>({
        name: '',
        format: PollFormatEnum.VOTING,
        description: null,
        options: [],
        settings: {
            isMultiChoiceEnabled: false,
            accessSettings: {
                type: DefaultPollAccessTypeOption.value,
            },
            statisticsSettings: {
                displayFormat: DefaultPollStatisticsDisplayFormatOption.value,
                shouldShowAfterVoting: false,
                accessSettings: {
                    type: DefaultPollStatisticsAccessTypeOption.value,
                },
            },
        },
    });

    const { mutateAsync } = useCreatePoll();

    const handlePollGeneralDataStepDataUpdate = ({ format, ...pollGeneralData }: Partial<TPollGeneralData>): void => {
        setPollCreationData((prevState) => {
            if (!format || prevState.format === format) {
                return { ...prevState, ...pollGeneralData };
            }

            const optionsWithFormat: TPollOptionListWithFormat = { format, options: [] };

            return { ...prevState, ...pollGeneralData, ...optionsWithFormat };
        });
    };

    const handlePollOptionsStepDataUpdate = (action: (pollOptionsWithFormat: TPollOptionListWithFormat) => TPollOptionListWithFormat): void => {
        setPollCreationData((prevState) => ({ ...prevState, ...action(prevState) }));
    };

    const handlePollSettingsStepDataUpdate = (action: (prevPollSettings: TPollSettings) => TPollSettings): void => {
        setPollCreationData((prevState) => ({ ...prevState, settings: action(prevState.settings) }));
    };

    const getPollSettingsNextStepId = async (): Promise<string | null> => {
        return await mutateAsync({ ...formatPollData(pollCreationData) })
            .then(({ id }) => {
                onPollCreate(id);

                return null;
            })
            .catch(() => WizardStepIdsMap.SETTINGS);
    };

    return (
        <Wizard.Root initialStepId={WizardStepIdsMap.GENERAL_DATA} onWizardDismiss={onPollCreationCancel} className={styles.PollCreationWizard}>
            <header className={styles.PollCreationWizardHeader}>
                <Wizard.PrevButton variant="iconOnly" size="medium">
                    <Icon name="caret" size="small" rotation="90" />
                </Wizard.PrevButton>

                <Button variant="iconOnly" size="medium" onClick={onPollCreationCancel}>
                    <Icon name="cross" size="small" />
                </Button>
            </header>

            <Wizard.Step id={WizardStepIdsMap.GENERAL_DATA} nextStepId={WizardStepIdsMap.OPTIONS} className={styles.PollCreationWizardStep}>
                <div className={styles.PollCreationWizardStepLeft}>
                    <PollGeneralDataStep pollGeneralData={pollCreationData} onStepDataUpdate={handlePollGeneralDataStepDataUpdate} />
                </div>

                <div className={styles.PollCreationWizardStepRight}></div>
            </Wizard.Step>

            <Wizard.Step id={WizardStepIdsMap.OPTIONS} nextStepId={WizardStepIdsMap.SETTINGS} className={styles.PollCreationWizardStep}>
                <div className={styles.PollCreationWizardStepLeft}>
                    <PollOptionsStep
                        key={pollCreationData.format}
                        optionsWithFormat={pollCreationData}
                        onStepDataUpdate={handlePollOptionsStepDataUpdate}
                    />
                </div>

                <div className={styles.PollCreationWizardStepRight}></div>
            </Wizard.Step>

            <Wizard.Step id={WizardStepIdsMap.SETTINGS} nextStepId={getPollSettingsNextStepId} className={styles.PollCreationWizardStep}>
                <div className={styles.PollCreationWizardStepLeft}>
                    <PollSettingsWizardStep pollSettings={pollCreationData.settings} onStepDataUpdate={handlePollSettingsStepDataUpdate} />
                </div>

                <div className={styles.PollCreationWizardStepRight}></div>
            </Wizard.Step>
        </Wizard.Root>
    );
};
