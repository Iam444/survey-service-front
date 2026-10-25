import { AuthPathTree } from './paths/auth-path-tree';
import { SurveyServicePathTree } from './paths/survey-service-path-tree';

export const PagesMap = {
    Auth: {
        getRoute: () => AuthPathTree.Root.getRoute(),
    },
    Polls: {
        getRoute: () => SurveyServicePathTree.Root.Polls.List.getRoute(),
    },
    PollCreation: {
        getRoute: () => SurveyServicePathTree.Root.Polls.New.getRoute(),
    },
    PollOverview: {
        getRoute: (pollId: string) => SurveyServicePathTree.Root.Polls.Poll.Overview.getRoute(pollId),
    },
    PollResults: {
        getRoute: (pollId: string) => SurveyServicePathTree.Root.Polls.Poll.Results.getRoute(pollId),
    },
};
