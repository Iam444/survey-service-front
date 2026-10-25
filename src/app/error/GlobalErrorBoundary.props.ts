import type { PropsWithChildren, ErrorInfo } from 'react';

export interface IGlobalErrorBoundaryProps extends PropsWithChildren {
    onErrorLogged?: (error: Error, errorInfo: ErrorInfo) => void;
}
