import type { TPollFormat } from '@/shared/api/types';
import type { TPollOption } from '@/entities/survey-poll';

export interface IPollOptionProps extends Pick<TPollOption, 'id' | 'name' | 'description'> {
    showRadio: boolean;
    isDisabled: boolean;
    isSelected: boolean;
    pollFormat: TPollFormat;
    onOptionSelect: (id: number) => void;
    onOptionDeselect: (id: number) => void;
}
