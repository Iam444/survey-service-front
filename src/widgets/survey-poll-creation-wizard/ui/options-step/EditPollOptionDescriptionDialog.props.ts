import type { TPollOption } from '@/entities/survey-poll';

export interface IEditPollOptionDescriptionDialogProps {
    onOptionDescriptionUpdate: (id: TPollOption['id'], description: TPollOption['description']) => void;
}
