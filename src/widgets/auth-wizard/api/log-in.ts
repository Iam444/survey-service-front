import { ApiClient, AuthEndpoints, authToken } from '@/shared/api';
import type { ILogInRequestDTO, ILogInResponseDTO } from '@/shared/api';

export type TLogInRequest = ILogInRequestDTO;
type TLogInResponse = ILogInResponseDTO;

export const logIn = async (request: TLogInRequest): Promise<void> => {
    const {
        data: { accessToken },
    } = await ApiClient.post<TLogInResponse>(AuthEndpoints.LOG_IN, request);

    authToken.setAccessToken(accessToken);
};
