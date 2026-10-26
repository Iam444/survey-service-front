import type { TErrorCode } from './error-codes';

export abstract class APIError extends Error {
    public readonly code: TErrorCode;
    public readonly description?: string | undefined;

    protected constructor(code: TErrorCode, message: string, description?: string, error?: unknown) {
        super(message, { cause: error });

        this.code = code;
        this.description = description;
    }
}
