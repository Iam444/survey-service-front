import type { DialogPopupProps } from '@base-ui/react/dialog';
import type { TDialogSize } from '@/shared/ui/dialog/types';

export interface IDialogPopupProps extends DialogPopupProps {
    size: TDialogSize;
}
