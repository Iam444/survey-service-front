import { ApiClient, UserEndpoints } from '@/shared/api';
import type { IKnownUserListResponseDTO, IKnownUserListRequestDTO } from '@/shared/api';

export type TGetUserListRequest = IKnownUserListRequestDTO;
export type TGetUserListResponse = IKnownUserListResponseDTO;

export const getUserList = async (request: TGetUserListRequest, signal: AbortSignal): Promise<TGetUserListResponse> => {
    const { data } = await ApiClient.post<TGetUserListResponse>(UserEndpoints.KNOWN_LIST, request, { signal });

    return data;
};
