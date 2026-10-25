import { ApiClient, AuthEndpoints, authToken } from '@/shared/api';
import type { ISignUpRequestDTO, ISignUpResponseDTO } from '@/shared/api';

export type TSignUpRequest = ISignUpRequestDTO;
type TSignUpResponse = ISignUpResponseDTO;

export const signUp = async (request: TSignUpRequest): Promise<void> => {
    const {
        data: { accessToken },
    } = await ApiClient.post<TSignUpResponse>(AuthEndpoints.SIGN_UP, request);

    authToken.setAccessToken(accessToken);
};
