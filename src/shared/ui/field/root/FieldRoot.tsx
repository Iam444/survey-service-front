import { useState, useMemo, useCallback, useId } from 'react';
import { joinStyles } from '@/shared/lib/join-styles';
import { FieldContext } from '@/shared/ui/field/context';
import { RequiredFieldValidator } from '../constants';
import styles from './FieldRoot.module.scss';
import type { FC } from 'react';
import type { IFieldValue } from '../types';
import type { IFieldContext } from '../context';
import type { IFieldRootProps } from './FieldRoot.props';

export const FieldRoot: FC<IFieldRootProps> = ({ validators: externalValidators, isRequired = false, className, children, ...props }) => {
    const [violatedRule, setViolatedRule] = useState<string | null>(null);

    const controlId = useId();

    const validators = useMemo(
        () => (isRequired ? [RequiredFieldValidator, ...(externalValidators || [])] : externalValidators || []),
        [isRequired, externalValidators],
    );

    const checkIfValid = useCallback(
        (value: IFieldValue) => {
            return validators.every((validator) => validator.checkIfValid(value));
        },
        [validators],
    );

    const validate = useCallback(
        (value: IFieldValue) => {
            const failedValidator = validators.find((validator) => !validator.checkIfValid(value));

            setViolatedRule(failedValidator?.rule || null);
        },
        [validators],
    );

    const finalClassName = joinStyles(styles.Field, className);

    const context: IFieldContext = useMemo(
        () => ({
            controlId,
            isRequired,
            isValid: !violatedRule,
            violatedRule,
            checkIfValid,
            validate,
            resetValidation: () => setViolatedRule(null),
        }),
        [controlId, isRequired, violatedRule, validate, checkIfValid],
    );

    return (
        <FieldContext value={context}>
            <div className={finalClassName} {...props}>
                {children}
            </div>
        </FieldContext>
    );
};
