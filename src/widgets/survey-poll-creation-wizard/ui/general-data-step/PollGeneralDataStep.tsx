import { useState, useMemo } from 'react';
import { Wizard } from '@/shared/ui/wizard';
import { Group } from '@/shared/ui/group';
import { Typography } from '@/shared/ui/typography';
import { debounce } from '@/shared/lib/debounce';
import { Field, REQUIRED_FIELD_RULE } from '@/shared/ui/field';
import { TextInput } from '@/shared/ui/text-input';
import { Textarea } from '@/shared/ui/textarea';
import { PlainSelect } from '@/shared/ui/plain-select';
import { Button } from '@/shared/ui/button';
import { PollFormatOptions, DefaultPollFormatOption } from '../../model/constants/poll-format-options';
import styles from './PollGeneralDataStep.module.scss';
import type { FC } from 'react';
import type { IFieldValue } from '@/shared/ui/field';
import type { IGeneralDataStepProps } from './PollGeneralDataStep.props';

export const PollGeneralDataStep: FC<IGeneralDataStepProps> = ({ pollGeneralData, onStepDataUpdate }) => {
    const [isNameValid, setIsNameValid] = useState(true);
    const [isNameSynced, setIsNameSynced] = useState(true);
    const [isDescriptionSynced, setIsDescriptionSynced] = useState(true);

    const onNameEnterDebounced = useMemo(
        () =>
            debounce((name: string) => {
                onStepDataUpdate({ name });
                setIsNameSynced(true);
            }, 600),
        [onStepDataUpdate],
    );
    const onDescriptionEnterDebounced = useMemo(
        () =>
            debounce((description: string | null) => {
                onStepDataUpdate({ description });
                setIsDescriptionSynced(true);
            }, 600),
        [onStepDataUpdate],
    );

    const handleNameValueChange = (fieldValue: IFieldValue, isValid: boolean): void => {
        setIsNameValid(isValid);

        if (isValid) {
            onNameEnterDebounced(fieldValue.trimmed);
            setIsNameSynced(false);
        }
    };

    const handleDescriptionValueChange = (fieldValue: IFieldValue): void => {
        onDescriptionEnterDebounced(fieldValue.trimmed || null);
        setIsDescriptionSynced(false);
    };

    const isStepCompleted = Boolean(pollGeneralData.name) && Boolean(pollGeneralData.format) && isNameValid && isNameSynced && isDescriptionSynced;

    return (
        <>
            <Typography element="h2" type="title" size="extraLarge" weight="extraLight" className={styles.PollGeneralDataStepTitle}>
                Новый опрос
            </Typography>

            <Group direction="column" gap="18">
                <Field.Root isRequired>
                    <Field.Label>Название</Field.Label>

                    <Field.Control defaultValue={pollGeneralData.name || ''} onValueChange={handleNameValueChange}>
                        <TextInput maxLength={60} />
                    </Field.Control>

                    <Field.InvalidityMessage rule={REQUIRED_FIELD_RULE}>Название опроса обязательно для заполнения</Field.InvalidityMessage>
                </Field.Root>

                <Field.Root>
                    <Field.Label>Описание</Field.Label>

                    <Field.Control defaultValue={pollGeneralData.description || ''} onValueChange={handleDescriptionValueChange}>
                        <Textarea rows={2} maxRows={4} maxLength={500} />
                    </Field.Control>
                </Field.Root>

                <Group gap="4" direction="column">
                    <Typography element="label" type="text" size="small" color="weak">
                        Формат
                    </Typography>

                    <PlainSelect
                        value={pollGeneralData.format}
                        options={PollFormatOptions}
                        onOptionSelect={(format) => onStepDataUpdate({ format: format || DefaultPollFormatOption.value })}
                    >
                        {(valueRender) => (
                            <Button variant="themed" size="medium">
                                {valueRender}
                            </Button>
                        )}
                    </PlainSelect>
                </Group>
            </Group>

            <Group direction="column" gap="12" className={styles.PollGeneralDataStepControls}>
                <Wizard.NextButton variant="solid" size="medium" disabled={!isStepCompleted}>
                    Продолжить
                </Wizard.NextButton>
            </Group>
        </>
    );
};
