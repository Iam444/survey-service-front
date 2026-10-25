import { session } from '@/shared/api/auth/session';
import { ApiClient } from '../api-client';
import { AuthEndpoints } from '../endpoints/auth-endpoints';
import { authToken } from './auth-token';

export const logOut = async (onLogOut: () => void | Promise<void>): Promise<void> => {
    if (!session.isLoggingOut()) {
        session.setIsLoggingOut(true);

        try {
            await ApiClient.post(AuthEndpoints.LOG_OUT);
        } catch (error) {
            console.error('Failed on logout request:', error);
        } finally {
            await onLogOut();

            authToken.resetAccessToken();
            session.setIsLoggingOut(false);
        }
    }
};
