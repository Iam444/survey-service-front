import type { TPollSettings } from '@/entities/survey-poll';

export interface IPollSettingsWizardStepProps {
    pollSettings: TPollSettings;
    onStepDataUpdate: (action: (prevPollSettings: TPollSettings) => TPollSettings) => void;
}
