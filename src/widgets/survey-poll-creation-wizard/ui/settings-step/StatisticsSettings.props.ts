import type { TPollStatisticsSettings } from '@/entities/survey-poll';
import type { TUser } from '@/entities/user';

export interface IStatisticsSettingsProps {
    statisticsSettings: TPollStatisticsSettings;
    onSettingsUpdate: (action: (prevStatisticsSettings: TPollStatisticsSettings) => TPollStatisticsSettings) => void;
    pollAccessHolders?: TUser[] | undefined;
}
