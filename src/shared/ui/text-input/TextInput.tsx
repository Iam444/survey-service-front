import { joinStyles } from '@/shared/lib/join-styles';
import styles from './TextInput.module.scss';
import type { FC } from 'react';
import type { ITextInputProps } from './TextInput.props';

export const TextInput: FC<ITextInputProps> = ({
    ref,
    type = 'text',
    leftStructure,
    rightStructure,
    isInvalid,
    className,
    wrapperClassName,
    ...props
}: ITextInputProps) => {
    const finalClassName = joinStyles(styles.TextInput, isInvalid && styles.invalid, className);
    const finalWrapperClassName = joinStyles(styles.TextInputWrapper, wrapperClassName);

    return (
        <div className={finalWrapperClassName}>
            <div className={styles.TextInputLeftStructure}>{leftStructure}</div>

            <input ref={ref} type={type} className={finalClassName} {...props} />

            <div className={styles.TextInputRightStructure}>{rightStructure}</div>
        </div>
    );
};
