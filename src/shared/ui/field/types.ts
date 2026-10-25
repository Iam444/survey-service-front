export interface IFieldValidator {
    rule: string;
    checkIfValid: (value: IFieldValue) => boolean;
}

export interface IFieldValue {
    raw: string;
    trimmed: string;
}
