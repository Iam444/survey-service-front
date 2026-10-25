import type { TErrorCode } from './error-codes';

export abstract class APIError extends Error {
    protected constructor(
        public readonly code: TErrorCode,
        message: string,
        public readonly description?: string,
        error?: unknown,
    ) {
        super(message, { cause: error });
    }
}
