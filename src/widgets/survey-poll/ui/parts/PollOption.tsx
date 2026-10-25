import { joinStyles } from '@/shared/lib/join-styles';
import { Checkbox } from '@/shared/ui/checkbox';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import { Group } from '@/shared/ui/group';
import { RadioButton } from '@/shared/ui/radio-button';
import { PollFormatEnum } from '@/entities/survey-poll';
import { showPollOptionDescriptionDialogHandler } from '../../model/constants/show-poll-option-description-dialog-handler';
import styles from './PollOption.module.scss';
import type { FC } from 'react';
import type { IPollOptionProps } from './PollOption.props';

export const PollOption: FC<IPollOptionProps> = ({
    showRadio,
    id,
    name,
    description,
    isDisabled,
    isSelected,
    pollFormat,
    onOptionSelect,
    onOptionDeselect,
}) => {
    const handleOptionSelect = (): void => {
        if (isDisabled) return;

        if (isSelected) {
            onOptionDeselect(id);
        } else {
            onOptionSelect(id);
        }
    };

    const finalClassName = joinStyles(styles.PollOption, isSelected && styles.isSelected, isDisabled && styles.isDisabled);

    return (
        <li onClick={handleOptionSelect} className={finalClassName}>
            <Group gap="12" align="center" flex="1">
                {showRadio ? (
                    <RadioButton readOnly disabled={isDisabled} checked={isSelected} />
                ) : (
                    <Checkbox readOnly disabled={isDisabled} checked={isSelected} />
                )}

                <Typography type="text" size="large" color={isDisabled && !isSelected ? 'weak' : 'default'} useTruncation>
                    {name}
                </Typography>
            </Group>

            {description && (
                <Button
                    variant="transparent"
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation();
                        showPollOptionDescriptionDialogHandler.openWithPayload({
                            optionId: id,
                            optionName: name,
                            optionDescription: description,
                        });
                    }}
                    className={styles.pollOptionDetailsButton}
                >
                    <Icon name={pollFormat === PollFormatEnum.VOTING ? 'info' : 'person'} size="small" />

                    {pollFormat === PollFormatEnum.VOTING ? 'Подробнее' : 'О кандидате'}
                </Button>
            )}
        </li>
    );
};
