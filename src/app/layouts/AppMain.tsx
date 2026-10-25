import { Outlet } from 'react-router-dom';
import styles from './AppMain.module.scss';
import type { FC } from 'react';

export const AppMain: FC = () => {
    return (
        <div className={styles.AppMain}>
            <Outlet />
        </div>
    );
};
