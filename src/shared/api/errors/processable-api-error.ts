import { APIError } from './api-error';
import type { TErrorCode } from './error-codes';

export class ProcessableAPIError extends APIError {
    constructor(code: TErrorCode, message: string) {
        super(code, message);
    }
}
