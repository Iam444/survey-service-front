import styles from './OptionList.module.scss';
import type { ReactElement } from 'react';
import type { TPollPlainOption, TPollElectionsOption } from '@/entities/survey-poll';
import type { IOptionListProps } from './OptionList.props';

export function OptionList<T extends TPollPlainOption | TPollElectionsOption>({ options, children }: IOptionListProps<T>): ReactElement | null {
    if (options.length === 0) {
        return null;
    }

    return (
        <ul className={styles.OptionList}>
            {options.map((option, index) => (
                <li key={index}>{children(option)}</li>
            ))}
        </ul>
    );
}
