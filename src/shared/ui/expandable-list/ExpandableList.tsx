import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './ExpandableList.module.scss';
import type { ReactElement } from 'react';
import type { IExpandableListProps } from './ExpandableList.props';

export function ExpandableList<T extends object>({
    initialListLength = 4,
    lengthLimitSensitivity = 2,
    items,
    className,
    children,
    ...props
}: IExpandableListProps<T>): ReactElement | null {
    const [isExpanded, setIsExpanded] = useState(false);

    if (items.length === 0) return null;

    const hasHiddenItems = items.length > initialListLength + lengthLimitSensitivity;
    const hiddenItemsQuantity = items.length - initialListLength;
    const visibleItems = hasHiddenItems && !isExpanded ? items.slice(0, initialListLength) : items;

    const finalClassName = joinStyles(styles.ExpandableList, className);

    return (
        <div className={styles.ExpandableListWrapper}>
            <ul className={finalClassName} {...props}>
                {visibleItems.map((item, index) => (
                    <li key={index}>{children(item)}</li>
                ))}
            </ul>

            {hasHiddenItems && (
                <Button onClick={() => setIsExpanded((prevState) => !prevState)} variant="bald" size="small" className={styles.ExpandableListButton}>
                    <Icon name="chevron" size="extraSmall" rotation={isExpanded ? '180' : undefined} />

                    {isExpanded ? 'Скрыть' : `Показать ещё ${hiddenItemsQuantity}`}
                </Button>
            )}
        </div>
    );
}
