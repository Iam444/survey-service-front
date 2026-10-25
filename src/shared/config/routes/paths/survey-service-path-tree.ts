export const SurveyServicePathTree = {
    Root: {
        PATH: 'survey-service',
        getFullPath: () => `/${SurveyServicePathTree.Root.PATH}` as const,
        getRoute: () => SurveyServicePathTree.Root.getFullPath(),
        Polls: {
            PATH: 'polls',
            getFullPath: () => `${SurveyServicePathTree.Root.getFullPath()}/${SurveyServicePathTree.Root.Polls.PATH}` as const,
            getRoute: () => SurveyServicePathTree.Root.Polls.getFullPath(),
            List: {
                PATH: 'list',
                getFullPath: () => `${SurveyServicePathTree.Root.Polls.getFullPath()}/${SurveyServicePathTree.Root.Polls.List.PATH}` as const,
                getRoute: () => SurveyServicePathTree.Root.Polls.List.getFullPath(),
            },
            Poll: {
                PATH: ':pollId',
                getParams: () => ({ POLL_ID: 'pollId' }),
                getFullPath: () => `${SurveyServicePathTree.Root.Polls.getFullPath()}/${SurveyServicePathTree.Root.Polls.Poll.PATH}` as const,
                getRoute: (pollId: string) => `${SurveyServicePathTree.Root.Polls.getRoute()}/${pollId}` as const,
                Overview: {
                    PATH: 'overview',
                    getParams: () => SurveyServicePathTree.Root.Polls.Poll.getParams(),
                    getFullPath: () =>
                        `${SurveyServicePathTree.Root.Polls.Poll.getFullPath()}/${SurveyServicePathTree.Root.Polls.Poll.Overview.PATH}` as const,
                    getRoute: (pollId: string) =>
                        `${SurveyServicePathTree.Root.Polls.Poll.getRoute(pollId)}/${SurveyServicePathTree.Root.Polls.Poll.Overview.PATH}` as const,
                },
                Results: {
                    PATH: 'results',
                    getParams: () => SurveyServicePathTree.Root.Polls.Poll.getParams(),
                    getFullPath: () =>
                        `${SurveyServicePathTree.Root.Polls.Poll.getFullPath()}/${SurveyServicePathTree.Root.Polls.Poll.Results.PATH}` as const,
                    getRoute: (pollId: string) =>
                        `${SurveyServicePathTree.Root.Polls.Poll.getRoute(pollId)}/${SurveyServicePathTree.Root.Polls.Poll.Results.PATH}` as const,
                },
            },
            New: {
                PATH: 'new',
                getFullPath: () => `${SurveyServicePathTree.Root.Polls.getFullPath()}/${SurveyServicePathTree.Root.Polls.New.PATH}` as const,
                getRoute: () => SurveyServicePathTree.Root.Polls.New.getFullPath(),
            },
        },
    },
} as const;
