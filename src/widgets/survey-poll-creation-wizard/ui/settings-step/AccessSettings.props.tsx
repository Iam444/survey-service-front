import type { TPollAccessSettings } from '@/entities/survey-poll';

export interface IAccessSettingsProps {
    accessSettings: TPollAccessSettings;
    onAccessSettingsUpdate: (action: (prevAccessSettings: TPollAccessSettings) => TPollAccessSettings) => void;
}
