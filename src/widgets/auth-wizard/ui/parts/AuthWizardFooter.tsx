import { Wizard, useWizard } from '@/shared/ui/wizard';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './AuthWizardFooter.module.scss';
import type { FC } from 'react';

export const AuthWizardFooter: FC = () => {
    const { isFirstStep } = useWizard();

    return (
        <div className={styles.AuthWizardFooter}>
            <Wizard.PrevButton variant="bald" size="medium" className={joinStyles(styles.AuthWizardFooterPrevButton, isFirstStep && styles.hidden)}>
                Назад
            </Wizard.PrevButton>

            <div className={styles.AuthWizardFooterPrivacyBlock}></div>
        </div>
    );
};
