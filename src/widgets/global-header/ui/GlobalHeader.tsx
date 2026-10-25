import { Logo } from '@/shared/ui/logo';
import { ProfileMenu } from './parts/ProfileMenu';
import styles from './GlobalHeader.module.scss';
import type { FC } from 'react';

export const GlobalHeader: FC = () => {
    return (
        <div className={styles.GlobalHeader}>
            <Logo size="small" />

            <ProfileMenu />
        </div>
    );
};
