import { Select } from '@/shared/ui/select';
import { Icon } from '@/shared/ui/icon';
import { Typography } from '@/shared/ui/typography';
import styles from './PlainSelect.module.scss';
import type { ReactElement } from 'react';
import type { ISelectOption } from '@/shared/ui/select';
import type { IPlainSelectProps } from './PlainSelect.props';

export function PlainSelect<
    TOption extends ISelectOption<TValue>,
    TDefaultOption extends TOption,
    TValue extends string = TOption extends ISelectOption<infer R> ? R : never,
>({
    alignItemWithTrigger = false,
    value,
    defaultOption = null,
    options,
    onOptionSelect,
    children,
}: IPlainSelectProps<TOption, TDefaultOption, TValue>): ReactElement {
    let selectedOption;

    if (value) {
        selectedOption = options.find((option) => option.value === value) || null;
    } else if (value === null) {
        selectedOption = null;
    }

    return (
        <Select.Root
            value={selectedOption}
            defaultValue={defaultOption}
            onValueChange={(option) => onOptionSelect(option?.value || null)}
            itemToStringValue={(option) => option.value}
        >
            <Select.Trigger render={children(<Select.Value size="medium" />)}></Select.Trigger>

            <Select.Portal>
                <Select.Positioner side="bottom" align="start" alignItemWithTrigger={alignItemWithTrigger}>
                    <Select.Popup>
                        <Select.List>
                            {options.map((option) => (
                                <Select.Item key={option.value} value={option} className={styles.PlainSelectOption}>
                                    <Select.ItemIndicator keepMounted>
                                        <Icon name="checkMark" size="small" iconColor="weak" />
                                    </Select.ItemIndicator>

                                    {option.iconName && (
                                        <Icon name={option.iconName} size="small" iconColor="weak" className={styles.PlainSelectOptionIcon} />
                                    )}

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
