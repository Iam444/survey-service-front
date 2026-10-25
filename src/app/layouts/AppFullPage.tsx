import { Outlet } from 'react-router-dom';
import styles from './AppFullPage.module.scss';
import type { FC } from 'react';

export const AppFullPage: FC = () => {
    return (
        <div className={styles.AppFullPage}>
            <Outlet />
        </div>
    );
};
