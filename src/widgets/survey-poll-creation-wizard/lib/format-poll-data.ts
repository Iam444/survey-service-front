import { PollFormatEnum, PollAccessTypeEnum, PollStatisticsDisplayFormatEnum, PollStatisticsAccessTypeEnum } from '@/entities/survey-poll';
import type { TPollSettings } from '@/entities/survey-poll';
import type { TPollGeneralData } from '../model/types/poll-general-data.type';
import type { TPollOptionListWithFormat } from '../model/types/poll-option-list-with-format.type';
import type { TCreatePollRequest } from '../api/create-poll';

export const formatPollData = (pollData: TPollGeneralData & TPollOptionListWithFormat & { settings: TPollSettings }): TCreatePollRequest => {
    const optionsWithFormat =
        pollData.format === PollFormatEnum.ELECTIONS
            ? {
                  format: pollData.format,
                  optionDataList: pollData.options.map((option) => ({
                      name: option.name,
                      description: option.description,
                      candidateId: option.candidate.id,
                  })),
              }
            : {
                  format: pollData.format,
                  optionDataList: pollData.options,
              };

    const accessSettings =
        pollData.settings.accessSettings.type === PollAccessTypeEnum.SPECIFIED
            ? {
                  ...pollData.settings.accessSettings,
                  holderIds: pollData.settings.accessSettings.holders.map((user) => user.id),
              }
            : pollData.settings.accessSettings;

    let statisticsSettings;

    if (pollData.settings.statisticsSettings.displayFormat === PollStatisticsDisplayFormatEnum.NONE) {
        statisticsSettings = pollData.settings.statisticsSettings;
    } else {
        const statisticsAccessSettings =
            pollData.settings.statisticsSettings.accessSettings.type === PollStatisticsAccessTypeEnum.SPECIFIED
                ? {
                      ...pollData.settings.statisticsSettings.accessSettings,
                      holderIds: pollData.settings.statisticsSettings.accessSettings.holders.map((user) => user.id),
                  }
                : pollData.settings.statisticsSettings.accessSettings;

        statisticsSettings = {
            ...pollData.settings.statisticsSettings,
            accessSettings: statisticsAccessSettings,
        };
    }

    return {
        ...pollData,
        ...optionsWithFormat,
        settings: {
            ...pollData.settings,
            accessSettings,
            statisticsSettings,
        },
    };
};
