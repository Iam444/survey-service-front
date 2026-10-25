import { NavLink } from 'react-router-dom';
import { Typography } from '@/shared/ui/typography';
import { Icon } from '@/shared/ui/icon';
import { joinStyles } from '@/shared/lib/join-styles';
import { PagesMap } from '@/shared/config/routes';
import { ExpandableSection } from '@/widgets/side-panel/parts/ExpandableSection';
import styles from './SidePanel.module.scss';
import type { FC } from 'react';
import type { NavLinkRenderProps } from 'react-router-dom';

export const SidePanel: FC = () => {
    const finalSidePanelItem = joinStyles(styles.SidePanelItem, (state: NavLinkRenderProps) => state.isActive && styles.active);

    return (
        <aside className={styles.SidePanel}>
            <NavLink to="/" className={finalSidePanelItem} style={{ cursor: 'not-allowed' }} onClick={(e) => e.preventDefault()}>
                <Icon name="notification" size="medium" iconColor="strong" />

                <Typography type="text" size="medium" useTruncation>
                    Уведомления
                </Typography>
            </NavLink>

            <div className={styles.SidePanelSeparator} />

            <NavLink to={PagesMap.Polls.getRoute()} className={finalSidePanelItem}>
                <Icon name="group" size="medium" iconColor="strong" />

                <Typography type="text" size="medium" useTruncation>
                    Опросы
                </Typography>
            </NavLink>

            <ExpandableSection label="Отмеченное"></ExpandableSection>
        </aside>
    );
};
