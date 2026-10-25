import { ErrorCodes } from './error-codes';
import { APIError } from './api-error';

export class UnprocessableAPIError extends APIError {
    constructor(error?: unknown) {
        super(ErrorCodes.UNPROCESSABLE_ERROR, 'Упс... Что-то пошло не так', 'Попробуйте обновить страницу или вернуться позже', error);
    }
}
