import { Group } from '@/shared/ui/group';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import { Typography } from '@/shared/ui/typography';
import { joinStyles } from '@/shared/lib/join-styles';
import styles from './OptionCardLayout.module.scss';
import type { FC } from 'react';
import type { IOptionCardLayoutProps } from './OptionCardLayout.props';

export const OptionCardLayout: FC<IOptionCardLayoutProps> = ({ errorMessage = null, onOptionDescriptionEdit, onOptionDelete, children }) => {
    const finalClassName = joinStyles(styles.OptionCardLayout, errorMessage && styles.hasError);

    return (
        <>
            <div className={finalClassName}>
                {children}

                <Group flex="none">
                    <Button variant="iconOnly" size="small" onClick={onOptionDescriptionEdit}>
                        <Icon name="pencil" size="small" />
                    </Button>

                    <Button variant="iconOnly" size="small" onClick={onOptionDelete}>
                        <Icon name="cross" size="extraSmall" />
                    </Button>
                </Group>
            </div>

            {errorMessage && (
                <Typography type="text" size="small" color="danger" className={styles.OptionCardLayoutErrorMessage}>
                    {errorMessage}
                </Typography>
            )}
        </>
    );
};
