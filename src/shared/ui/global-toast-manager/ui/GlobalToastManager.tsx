import { Toast } from '@base-ui/react';
import { globalToastManager } from '../constants';
import styles from './GlobalToastManager.module.scss';
import { GlobalToastList } from './GlobalToastList';
import type { FC } from 'react';

export const GlobalToastManager: FC = () => {
    return (
        <Toast.Provider toastManager={globalToastManager}>
            <Toast.Portal>
                <Toast.Viewport className={styles.GlobalToastManager}>
                    <GlobalToastList />
                </Toast.Viewport>
            </Toast.Portal>
        </Toast.Provider>
    );
};
