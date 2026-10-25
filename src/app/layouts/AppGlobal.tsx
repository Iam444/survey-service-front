import { Group } from '@/shared/ui/group';
import { GlobalHeader } from '@/widgets/global-header';
import { SidePanel } from '@/widgets/side-panel';
import styles from './AppGlobal.module.scss';
import { AppMain } from './AppMain';
import type { FC } from 'react';

export const AppGlobal: FC = () => {
    return (
        <div className={styles.AppGlobal}>
            <GlobalHeader />

            <Group flex="1">
                <SidePanel />

                <AppMain />
            </Group>
        </div>
    );
};
