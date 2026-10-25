import { Component } from 'react';
import { GlobalErrorTemplate } from './GlobalErrorTemplate';
import type { ReactNode, ErrorInfo } from 'react';
import type { IGlobalErrorBoundaryState } from './GlobalErrorBoundary.state';
import type { IGlobalErrorBoundaryProps } from './GlobalErrorBoundary.props';

export class GlobalErrorBoundary extends Component<IGlobalErrorBoundaryProps, IGlobalErrorBoundaryState> {
    public override state: IGlobalErrorBoundaryState = {
        error: null,
    };

    public static getDerivedStateFromError(error: Error): IGlobalErrorBoundaryState {
        return { error };
    }

    public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error(error, errorInfo.componentStack);
    }

    public override render(): ReactNode {
        if (this.state.error) {
            return <GlobalErrorTemplate />;
        }

        return this.props.children;
    }
}
