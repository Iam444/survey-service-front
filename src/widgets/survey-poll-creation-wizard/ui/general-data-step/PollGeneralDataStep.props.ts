import type { TPollGeneralData } from '../../model/types/poll-general-data.type';

export interface IGeneralDataStepProps {
    pollGeneralData: TPollGeneralData;
    onStepDataUpdate: (pollGeneralData: Partial<TPollGeneralData>) => void;
}
