import { ApiClient, UserEndpoints, UnprocessableAPIError, APIError, ErrorCodes } from '@/shared/api';
import type { TViewerResponseDTO } from '@/shared/api';

export type TGetViewerResponse = TViewerResponseDTO;

export const getViewer = async (): Promise<TGetViewerResponse> => {
    try {
        const { data } = await ApiClient.get<TGetViewerResponse>(UserEndpoints.ME);

        return data;
    } catch (error: unknown) {
        if (error instanceof APIError && error.code === ErrorCodes.NOT_FOUND) {
            console.error(`[CORRUPTED]: ${error.message}`);

            throw new UnprocessableAPIError(error);
        }

        throw error;
    }
};
