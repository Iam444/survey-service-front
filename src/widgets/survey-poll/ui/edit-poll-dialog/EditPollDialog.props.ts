import type { TPoll } from '@/entities/survey-poll';

export interface IEditPollDialogProps {
    id: TPoll['id'];
    name: TPoll['name'];
    description: TPoll['description'];
}
