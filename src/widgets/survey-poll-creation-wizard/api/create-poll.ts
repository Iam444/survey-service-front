import { ApiClient, PollEndpoints, APIError, ErrorCodes, UnprocessableAPIError } from '@/shared/api';
import type { ICreatePollResponseDTO, ICreateVotingPollRequestDTO, ICreateElectionsPollRequestDTO } from '@/shared/api';

export type TCreatePollRequest = ICreateVotingPollRequestDTO | ICreateElectionsPollRequestDTO;
export type TCreatePollResponse = ICreatePollResponseDTO;

export const createPoll = async (request: TCreatePollRequest): Promise<TCreatePollResponse> => {
    try {
        const { data } = await ApiClient.post<TCreatePollResponse>(PollEndpoints.CREATE, request);

        return data;
    } catch (error: unknown) {
        if (
            error instanceof APIError &&
            (error.code === ErrorCodes.SURVEY_DUPLICATED_OPTION || error.code === ErrorCodes.SURVEY_DUPLICATED_ACCESS_HOLDER)
        ) {
            console.error(`[CORRUPTED]: ${error.message}`);

            throw new UnprocessableAPIError(error);
        }

        throw error;
    }
};
