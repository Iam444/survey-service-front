import '@tanstack/react-query';
import type { APIError } from '@/shared/api/errors/unprocessable-api-error';

declare module '@tanstack/react-query' {
    interface Register {
        defaultError: APIError;
    }
}
