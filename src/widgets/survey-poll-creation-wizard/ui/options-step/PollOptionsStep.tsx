import { Wizard } from '@/shared/ui/wizard';
import { Group } from '@/shared/ui/group';
import { Typography } from '@/shared/ui/typography';
import { PollFormatEnum } from '@/entities/survey-poll';
import { ElectionsOptionsManager } from './ElectionsOptionsManager';
import { PlainOptionsManager } from './PlainOptionsManager';
import styles from './PollOptionsStep.module.scss';
import type { FC } from 'react';
import type { TPollPlainOption, TPollElectionsOption } from '@/entities/survey-poll';
import type { IPollOptionsStepProps } from './PollOptionsStep.props';

export const PollOptionsStep: FC<IPollOptionsStepProps> = ({ optionsWithFormat, onStepDataUpdate }) => {
    const handlePlainOptionsUpdate = (action: (prevState: TPollPlainOption[]) => TPollPlainOption[]): void => {
        onStepDataUpdate((prevState) => {
            if (prevState.format !== PollFormatEnum.VOTING) {
                return prevState;
            }

            return {
                format: PollFormatEnum.VOTING,
                options: action(prevState.options),
            };
        });
    };

    const handleElectionsOptionsUpdate = (action: (prevState: TPollElectionsOption[]) => TPollElectionsOption[]): void => {
        onStepDataUpdate((prevState) => {
            if (prevState.format !== PollFormatEnum.ELECTIONS) {
                return prevState;
            }

            return {
                format: PollFormatEnum.ELECTIONS,
                options: action(prevState.options),
            };
        });
    };

    return (
        <>
            <Typography element="h2" type="title" size="extraLarge" weight="extraLight" className={styles.PollOptionsStepTitle}>
                Варианты выбора
            </Typography>

            {optionsWithFormat.format === PollFormatEnum.VOTING ? (
                <PlainOptionsManager options={optionsWithFormat.options} onOptionsUpdate={handlePlainOptionsUpdate}>
                    {(isStepCompleted: boolean) => (
                        <Group direction="column" gap="12" className={styles.PollOptionsStepControls}>
                            <Wizard.NextButton variant="solid" size="medium" disabled={!isStepCompleted}>
                                Продолжить
                            </Wizard.NextButton>
                        </Group>
                    )}
                </PlainOptionsManager>
            ) : (
                <ElectionsOptionsManager options={optionsWithFormat.options} onOptionsUpdate={handleElectionsOptionsUpdate}>
                    {(isStepCompleted: boolean) => (
                        <Group direction="column" gap="12" className={styles.PollOptionsStepControls}>
                            <Wizard.NextButton variant="solid" size="medium" disabled={!isStepCompleted}>
                                Продолжить
                            </Wizard.NextButton>
                        </Group>
                    )}
                </ElectionsOptionsManager>
            )}
        </>
    );
};
