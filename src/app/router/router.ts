import { createBrowserRouter } from 'react-router-dom';
import { SurveyServicePathTree, AuthPathTree } from '@/shared/config/routes';
import { SurveyPollPageLayout } from '@/pages/layouts/survey-poll-page-layout';
import { SurveyListPageLayout } from '@/pages/layouts/survey-list-page-layout';
import { AppFullPage, AppGlobal, AppMain } from '@/app/layouts';
import { RootErrorBoundary } from './root-error-boundary';

export const router = createBrowserRouter([
    {
        Component: AppFullPage,
        ErrorBoundary: RootErrorBoundary,
        children: [
            {
                Component: AppGlobal,
                children: [
                    {
                        Component: SurveyListPageLayout,
                        children: [
                            {
                                path: SurveyServicePathTree.Root.Polls.List.getFullPath(),
                                lazy: async () => {
                                    const { PollListPage } = await import('@/pages/survey-poll-list');

                                    return { Component: PollListPage };
                                },
                            },
                        ],
                    },

                    {
                        Component: SurveyPollPageLayout,
                        children: [
                            {
                                path: SurveyServicePathTree.Root.Polls.Poll.Overview.getFullPath(),
                                lazy: async () => {
                                    const { PollOverviewPage } = await import('@/pages/survey-poll-overview');

                                    return { Component: PollOverviewPage };
                                },
                            },
                            {
                                path: SurveyServicePathTree.Root.Polls.Poll.Results.getFullPath(),
                                lazy: async () => {
                                    const { PollResultsPage } = await import('@/pages/survey-poll-results');

                                    return { Component: PollResultsPage };
                                },
                            },
                        ],
                    },
                ],
            },

            {
                Component: AppMain,
                children: [
                    {
                        path: AuthPathTree.Root.getFullPath(),
                        lazy: async () => {
                            const { AuthPage } = await import('@/pages/auth');
                            return { Component: AuthPage };
                        },
                    },

                    {
                        path: SurveyServicePathTree.Root.Polls.New.getFullPath(),
                        lazy: async () => {
                            const { PollCreationPage } = await import('@/pages/survey-poll-creation');
                            return { Component: PollCreationPage };
                        },
                    },
                ],
            },
        ],
    },
]);
