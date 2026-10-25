import type { TPollOptionListWithFormat } from '../../model/types/poll-option-list-with-format.type';

export interface IPollOptionsStepProps {
    optionsWithFormat: TPollOptionListWithFormat;
    onStepDataUpdate: (action: (prevState: TPollOptionListWithFormat) => TPollOptionListWithFormat) => void;
}
