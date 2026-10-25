import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';
import { ErrorCodes, logOut } from '@/shared/api';
import { PagesMap } from '@/shared/config/routes';
import { globalToastManager } from '@/shared/ui/global-toast-manager';
import { router } from '../router';

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: async (error) => {
            if (error.code === ErrorCodes.SESSION_EXPIRED) {
                await logOut(async () => {
                    queryClient.clear();
                    await router.navigate(PagesMap.Auth.getRoute());
                });
            }

            if (error.code === ErrorCodes.NOT_FOUND || error.code === ErrorCodes.NOT_PERMITTED) {
                await router.navigate(PagesMap.Polls.getRoute());
            }

            if (error.code === ErrorCodes.UNPROCESSABLE_ERROR || error.code === ErrorCodes.NETWORK_ERROR) {
                globalToastManager.add({
                    id: error.code,
                    title: error.message,
                    description: error.description,
                    data: { useReloadFallbackButton: true },
                });
                console.error(error.cause);
            }
        },
    }),
    mutationCache: new MutationCache({
        onError: async (error) => {
            if (error.code === ErrorCodes.SESSION_EXPIRED) {
                await logOut(async () => {
                    queryClient.clear();
                    await router.navigate(PagesMap.Auth.getRoute());
                });
            }

            if (error.code === ErrorCodes.NOT_PERMITTED) {
                globalToastManager.add({ id: error.code, title: 'У Вас нет доступа' });
            }

            if (error.code === ErrorCodes.NOT_FOUND) {
                globalToastManager.add({
                    id: error.code,
                    title: 'Не удалось обработать действие',
                    description: 'Попробуйте обновить страницу и попробовать снвоа',
                });
                console.error(error.message);
            }

            if (error.code === ErrorCodes.UNPROCESSABLE_ERROR || error.code === ErrorCodes.NETWORK_ERROR) {
                globalToastManager.add({
                    id: error.code,
                    title: error.message,
                    description: error.description,
                    data: { useReloadFallbackButton: true },
                });
                console.error(error.cause);
            }
        },
    }),
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 30,
            retry: 0,
            refetchOnWindowFocus: false,
        },
    },
});
