import { useState } from 'react';
import { Select } from '@/shared/ui/select';
import { Icon } from '@/shared/ui/icon';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './FilterSelect.module.scss';
import type { ReactElement } from 'react';
import type { TPollFormat, TPollStatus } from '@/shared/api/types';
import type { ISelectOption } from '@/shared/ui/select';
import type { IFilterSelectProps } from './FilterSelect.props';

export function FilterSelect<T extends TPollFormat | TPollStatus>({ placeholder, options, onOptionSelect }: IFilterSelectProps<T>): ReactElement {
    const [selectedOption, setSelectedOption] = useState<ISelectOption<T> | null>(null);

    const handleOptionSelect = (option: ISelectOption<T> | null): void => {
        setSelectedOption(option);
        onOptionSelect(option?.value || null);
    };

    const handleClear = (): void => {
        setSelectedOption(null);
        onOptionSelect(null);
    };

    return (
        <Select.Root value={selectedOption} onValueChange={handleOptionSelect}>
            <div className={styles.FilterSelectTriggerGroup}>
                <Select.Trigger size="small" isRounded className={joinStyles(styles.FilterSelectTrigger, selectedOption && styles.hasValue)}>
                    <Select.Value size="medium" placeholder={placeholder} useTruncation />
                </Select.Trigger>

                {selectedOption && (
                    <Button variant="iconOnly" size="extraSmall" isRounded onClick={handleClear} className={styles.FilterSelectClearButton}>
                        <Icon name="cross" size="extraSmall" />
                    </Button>
                )}
            </div>

            <Select.Portal>
                <Select.Positioner side="bottom" align="start" alignItemWithTrigger={false}>
                    <Select.Popup>
                        <Select.List>
                            {options.map((option) => (
                                <Select.Item key={option.value} value={option} className={styles.FilterSelectListItem}>
                                    <Select.ItemIndicator keepMounted>
                                        <Icon name="checkMark" size="small" iconColor="weak" />
                                    </Select.ItemIndicator>

                                    <Select.ItemText size="medium">
                                        {option.label}

                                        {option.description && (
                                            <Typography type="text" size="small" color="weak">
                                                {option.description}
                                            </Typography>
                                        )}
                                    </Select.ItemText>
                                </Select.Item>
                            ))}
                        </Select.List>
                    </Select.Popup>
                </Select.Positioner>
            </Select.Portal>
        </Select.Root>
    );
}
