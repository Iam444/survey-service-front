import { ApiClient, PollEndpoints } from '@/shared/api';
import type { IPollPreviewListResponseDTO, IPollPreviewListRequestDTO } from '@/shared/api';

export type TGetPollPreviewListRequest = IPollPreviewListRequestDTO;
export type TGetPollPreviewListResponse = IPollPreviewListResponseDTO;

export const getPollPreviewList = async (request: IPollPreviewListRequestDTO, signal: AbortSignal): Promise<IPollPreviewListResponseDTO> => {
    const { data } = await ApiClient.post<IPollPreviewListResponseDTO>(PollEndpoints.LIST, request, { signal });

    return data;
};
