import type { TPollStatisticsAccessSettings } from '@/entities/survey-poll';
import type { TUser } from '@/entities/user';

export interface IStatisticsAccessSettingsProps {
    statisticsAccessSettings: TPollStatisticsAccessSettings;
    onStatisticsAccessSettingsUpdate: (
        action: (prevStatisticsAccessSettings: TPollStatisticsAccessSettings) => TPollStatisticsAccessSettings,
    ) => void;
    pollAccessHolders?: TUser[] | undefined;
}
