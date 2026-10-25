import { ApiClient, PollEndpoints, APIError, ErrorCodes, UnprocessableAPIError } from '@/shared/api';
import type { IChangePollStatusRequestDTO } from '@/shared/api';

export interface IChangePollStatusRequest {
    pollId: string;
    payload: IChangePollStatusRequestDTO;
}

export const changePollStatus = async (request: IChangePollStatusRequest): Promise<void> => {
    try {
        await ApiClient.patch(PollEndpoints.changeStatus(request.pollId), request.payload);
    } catch (error: unknown) {
        if (error instanceof APIError && error.code === ErrorCodes.SURVEY_INVALID_STATUS_TRANSITION) {
            console.error(`[CORRUPTED]: ${error.message}`);

            throw new UnprocessableAPIError(error);
        }

        throw error;
    }
};
