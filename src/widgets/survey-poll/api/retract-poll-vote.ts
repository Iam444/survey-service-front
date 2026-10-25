import { ApiClient, PollEndpoints, APIError, ErrorCodes, UnprocessableAPIError } from '@/shared/api';

export interface IRetractPollVoteRequest {
    readonly pollId: string;
}

export const retractPollVote = async (request: IRetractPollVoteRequest): Promise<void> => {
    try {
        await ApiClient.delete(PollEndpoints.retractVote(request.pollId));
    } catch (error: unknown) {
        if (error instanceof APIError && error.code === ErrorCodes.SURVEY_STATUS_RESTRICTIONS) {
            console.error(`[CORRUPTED]: ${error.message}`);

            throw new UnprocessableAPIError(error);
        }

        throw error;
    }
};
