import axios, { AxiosError } from 'axios';
import { isProcessableAPIError } from './is-processable-api-error';
import { ProcessableAPIError } from './processable-api-error';
import { NetworkError } from './network-error';
import { UnprocessableAPIError } from './unprocessable-api-error';

export const mapError = (error: AxiosError): never => {
    if (axios.isCancel(error)) {
        throw error;
    }

    if (error.response) {
        if (isProcessableAPIError(error.response?.data)) {
            throw new ProcessableAPIError(error.response.data.code, error.response.data.message);
        }
    } else if (
        error.request ||
        (error.code && [AxiosError.ETIMEDOUT, AxiosError.ECONNABORTED, AxiosError.ECONNREFUSED, AxiosError.ERR_NETWORK].includes(error.code))
    ) {
        throw new NetworkError(error);
    }

    throw new UnprocessableAPIError(error);
};
