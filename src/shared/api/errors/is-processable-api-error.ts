import type { ProcessableAPIError } from './processable-api-error';

export const isProcessableAPIError = (error: unknown): error is ProcessableAPIError =>
    error != undefined &&
    typeof error === 'object' &&
    'code' in error &&
    typeof error.code === 'string' &&
    'message' in error &&
    typeof error.message === 'string';
