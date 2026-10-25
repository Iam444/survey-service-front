import { ApiClient, PollEndpoints, APIError, UnprocessableAPIError, ErrorCodes } from '@/shared/api';
import type { IEditPollRequestDTO } from '@/shared/api';

export interface IEditPollRequest {
    pollId: string;
    payload: IEditPollRequestDTO;
}

export const editPoll = async (request: IEditPollRequest): Promise<void> => {
    try {
        await ApiClient.patch(PollEndpoints.edit(request.pollId), request.payload);
    } catch (error: unknown) {
        if (error instanceof APIError && error.code === ErrorCodes.SURVEY_STATUS_RESTRICTIONS) {
            console.error(`[CORRUPTED]: ${error.message}`);

            throw new UnprocessableAPIError(error);
        }

        throw error;
    }
};
