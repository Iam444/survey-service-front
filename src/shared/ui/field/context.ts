import { createContext, useContext } from 'react';
import type { IFieldValue } from './types';

export interface IFieldContext {
    controlId: string;
    isRequired: boolean;
    isValid: boolean;
    violatedRule: string | null;
    checkIfValid: (value: IFieldValue) => boolean;
    validate: (value: IFieldValue) => void;
    resetValidation: () => void;
}

export const FieldContext = createContext<IFieldContext | null>(null);

export const useField = (): IFieldContext => {
    const context = useContext(FieldContext);

    if (!context) throw new Error('[Field]: Подкомпоненты должны быть внутри <FieldRoot />');

    return context;
};
