import { Toast } from '@base-ui/react';
import { GlobalToast } from './GlobalToast';
import type { FC } from 'react';
import type { IGlobalToastOptions } from '../types';

export const GlobalToastList: FC = () => {
    const { toasts } = Toast.useToastManager<IGlobalToastOptions>();

    return toasts.map((toast) => <GlobalToast key={toast.id} toast={toast} />);
};
