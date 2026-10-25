import axios, { AxiosError, HttpStatusCode } from 'axios';
import { session } from './auth/session';
import { authToken } from './auth/auth-token';
import { AuthEndpoints } from './endpoints/auth-endpoints';
import { mapError } from './errors/map-error';
import { SessionExpiredError } from './errors/session-exipred-error';
import type { InternalAxiosRequestConfig } from 'axios';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

const apiActualVersion = 'v1';
const baseApiUrl = `/api/${apiActualVersion}`;

export const ApiClient = axios.create({
    baseURL: baseApiUrl,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});

const BypassEndpoints = new Set<string>([AuthEndpoints.LOG_IN, AuthEndpoints.REFRESH]);
const checkIfShouldBypassEndpoint = (requestUrl?: string): boolean =>
    Boolean(requestUrl && [...BypassEndpoints].some((route) => requestUrl.endsWith(route)));

ApiClient.interceptors.request.use((config) => {
    if (session.isLoggingOut() && config.url !== AuthEndpoints.LOG_OUT) {
        const controller = new AbortController();

        config.signal = controller.signal;
        controller.abort();

        return config;
    }

    const token = authToken.getAccessToken();

    if (token && config.headers) {
        config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
});

let refreshPromise: Promise<string> | null = null;

ApiClient.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig | undefined;

        const requestUrl = originalRequest?.url;

        if (
            error.response?.status === HttpStatusCode.Unauthorized &&
            originalRequest &&
            !originalRequest._retry &&
            !checkIfShouldBypassEndpoint(requestUrl)
        ) {
            originalRequest._retry = true;

            try {
                if (!refreshPromise) {
                    refreshPromise = axios
                        .post<{ accessToken: string }>(`${baseApiUrl}${AuthEndpoints.REFRESH}`, {}, { withCredentials: true })
                        .then((response) => {
                            authToken.setAccessToken(response.data.accessToken);

                            return response.data.accessToken;
                        })
                        .finally(() => {
                            refreshPromise = null;
                        });
                }

                const accessToken = await refreshPromise;

                originalRequest.headers.set('Authorization', `Bearer ${accessToken}`);

                return ApiClient.request(originalRequest);
            } catch {
                throw new SessionExpiredError();
            }
        }

        mapError(error);
    },
);
