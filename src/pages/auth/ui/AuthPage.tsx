import { useNavigate } from 'react-router-dom';
import { PagesMap } from '@/shared/config/routes';
import { AuthWizard } from '@/widgets/auth-wizard';
import styles from './AuthPage.module.scss';
import type { FC } from 'react';

export const AuthPage: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.AuthPage}>
            <AuthWizard onAuthPass={() => navigate(PagesMap.Polls.getRoute())} />
        </div>
    );
};
