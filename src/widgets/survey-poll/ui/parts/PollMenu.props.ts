import type { TPoll } from '@/entities/survey-poll';

export interface IPollMenuProps {
    pollId: TPoll['id'];
    pollStatus: TPoll['status'];
    pollAuthorId: TPoll['author']['id'];
    onPollPublish: () => void;
    onPollClose: () => void;
}
