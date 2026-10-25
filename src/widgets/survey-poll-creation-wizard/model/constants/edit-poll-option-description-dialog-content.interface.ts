import type { TPollOption } from '@/entities/survey-poll';

export interface IEditPollOptionDescriptionDialogContent {
    optionId: TPollOption['id'];
    optionName: TPollOption['name'];
    optionDescription: TPollOption['description'];
}
