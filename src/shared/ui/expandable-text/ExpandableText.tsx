import { useState, useEffect, useRef } from 'react';
import { Button } from '@/shared/ui/button';
import { joinStyles } from '@/shared/lib/join-styles';
import { Typography } from '@/shared/ui/typography';
import { Icon } from '@/shared/ui/icon';
import styles from './ExpandableText.module.scss';
import type { FC } from 'react';
import type { IExpandableTextProps } from './ExpandableText.props';

export const ExpandableText: FC<IExpandableTextProps> = ({ text, size = 'medium', maxLines, className, ...props }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClamped, setIsClamped] = useState(false);

    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const element = textRef.current;

        if (!element) return;

        const onTextOverflow = (): void => {
            setIsClamped(element.scrollHeight > element.clientHeight);
        };

        onTextOverflow();

        const resizeObserver = new ResizeObserver(onTextOverflow);

        resizeObserver.observe(element);

        return () => resizeObserver.disconnect();
    }, [text, maxLines, isExpanded]);

    const finalClassName = joinStyles(styles.ExpandableText, className);

    return (
        <div className={styles.ExpandableTextWrapper}>
            <Typography
                ref={textRef}
                element="p"
                type="text"
                size={size}
                maxLines={isExpanded ? undefined : maxLines}
                className={finalClassName}
                {...props}
            >
                {text}
            </Typography>

            {isClamped && !isExpanded && (
                <Button variant="bald" size="small" onClick={() => setIsExpanded(true)} className={styles.ExpandableTextToggleButton}>
                    <Icon name="chevron" size="extraSmall" />
                    Показать полностью
                </Button>
            )}

            {isExpanded && (
                <Button variant="bald" size="small" onClick={() => setIsExpanded(false)} className={styles.ExpandableTextToggleButton}>
                    <Icon name="chevron" size="extraSmall" rotation="180" />
                    Скрыть
                </Button>
            )}
        </div>
    );
};
