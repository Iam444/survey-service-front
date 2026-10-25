import { joinStyles } from '@/shared/lib/join-styles';
import styles from './Textarea.module.scss';
import type { FC, CSSProperties } from 'react';
import type { ITextareaProps } from './Textarea.props';

export const Textarea: FC<ITextareaProps> = ({ rows, maxRows, isInvalid = false, value, className, wrapperClassName, ...props }) => {
    const finalClassName = joinStyles(styles.Textarea, isInvalid && styles.invalid, className);
    const finalMirrorClassName = joinStyles(styles.TextareaMirrorText, className);
    const finalWrapperClassName = joinStyles(styles.TextareaWrapper, wrapperClassName);

    return (
        <div className={finalWrapperClassName}>
            <textarea rows={rows} value={value} className={finalClassName} style={{ '--max-rows': maxRows } as CSSProperties} {...props} />

            <div aria-hidden className={finalMirrorClassName} style={{ '--max-rows': maxRows } as CSSProperties}>
                {value}
            </div>
        </div>
    );
};
