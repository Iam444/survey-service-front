import { ApiClient, PollEndpoints, APIError, ErrorCodes, UnprocessableAPIError } from '@/shared/api';
import type { ISubmitVotingPollVoteRequestDTO, ISubmitElectionsPollVoteRequestDTO } from '@/shared/api';
import type { TErrorCode } from '@/shared/api/errors/error-codes';

export interface ISubmitPollVoteRequest {
    readonly pollId: string;
    readonly payload: ISubmitVotingPollVoteRequestDTO | ISubmitElectionsPollVoteRequestDTO;
}

export const submitPollVote = async (request: ISubmitPollVoteRequest): Promise<void> => {
    try {
        await ApiClient.post(PollEndpoints.submitVote(request.pollId), request.payload);
    } catch (error: unknown) {
        const matchingErrorCodes: TErrorCode[] = [
            ErrorCodes.SURVEY_STATUS_RESTRICTIONS,
            ErrorCodes.SURVEY_CHOSEN_OPTIONS_COUNT,
            ErrorCodes.SURVEY_DUPLICATED_OPTION,
        ];

        if (error instanceof APIError && matchingErrorCodes.includes(error.code)) {
            console.error(`[CORRUPTED]: ${error.message}`);

            throw new UnprocessableAPIError(error);
        }

        throw error;
    }
};
