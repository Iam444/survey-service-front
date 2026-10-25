import { ApiClient, UserEndpoints } from '@/shared/api';
import type { IUserExistenceRequestDTO, IUserExistenceResponseDTO } from '@/shared/api';

export type TGetUserExistenceRequest = IUserExistenceRequestDTO;
export type TGetUserExistenceResponse = IUserExistenceResponseDTO;

export const getUserExistence = async (request: TGetUserExistenceRequest): Promise<TGetUserExistenceResponse> => {
    const { data } = await ApiClient.get<TGetUserExistenceResponse>(UserEndpoints.IS_EXISTS, { params: request });

    return data;
};
