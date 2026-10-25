import { useRouteError, isRouteErrorResponse, Navigate } from 'react-router-dom';
import { PagesMap } from '@/shared/config/routes';
import { GlobalErrorTemplate } from '../error';
import type { FC } from 'react';

export const RootErrorBoundary: FC = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error) && error.status === 404) {
        return <Navigate to={PagesMap.Polls.getRoute()} replace={true} />;
    } else {
        console.error(error);

        return <GlobalErrorTemplate />;
    }
};
