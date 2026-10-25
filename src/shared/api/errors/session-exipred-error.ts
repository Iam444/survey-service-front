import { ErrorCodes } from './error-codes';
import { APIError } from './api-error';

export class SessionExpiredError extends APIError {
    constructor() {
        super(ErrorCodes.SESSION_EXPIRED, 'Сессия истекла');
    }
}
