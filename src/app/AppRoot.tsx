import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { GlobalToastManager } from '@/shared/ui/global-toast-manager';
import { queryClient } from '@/app/query';
import { GlobalErrorBoundary } from './error';
import styles from './AppRoot.module.scss';
import { router } from './router';
import type { FC } from 'react';

export const AppRoot: FC = () => {
    return (
        <GlobalErrorBoundary>
            <GlobalToastManager />

            <QueryClientProvider client={queryClient}>
                <div className={styles.AppRoot}>
                    <RouterProvider router={router} />
                </div>
            </QueryClientProvider>
        </GlobalErrorBoundary>
    );
};
