import { ErrorCodes } from './error-codes';
import { APIError } from './api-error';

export class NetworkError extends APIError {
    constructor(error?: unknown) {
        super(
            ErrorCodes.NETWORK_ERROR,
            'Ошибка соединения',
            'Не удалось установить соединение с сервером. Проверьте интернет-подключение и попробуйте обновить страницу',
            error,
        );
    }
}
