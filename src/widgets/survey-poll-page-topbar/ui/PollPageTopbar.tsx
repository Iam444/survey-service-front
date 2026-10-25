import { Navbar } from '@/shared/ui/navbar';
import { PageTopbar } from '@/shared/ui/page-topbar';
import { PagesMap } from '@/shared/config/routes';
import { PollName } from './parts/PollName';
import type { FC } from 'react';
import type { ISurveyPageTopbarProps } from './PollPageTopbar.props';

export const PollPageTopbar: FC<ISurveyPageTopbarProps> = ({ pollId }) => {
    return (
        <PageTopbar.Root>
            <PageTopbar.Content>
                <PollName pollId={pollId} />
            </PageTopbar.Content>

            <PageTopbar.Navigation>
                <Navbar.Root>
                    <Navbar.List>
                        <Navbar.Item>
                            <Navbar.Link to={PagesMap.PollOverview.getRoute(pollId)}>Опросник</Navbar.Link>
                        </Navbar.Item>

                        <Navbar.Item>
                            <Navbar.Link to={PagesMap.PollResults.getRoute(pollId)}>Результаты</Navbar.Link>
                        </Navbar.Item>
                    </Navbar.List>
                </Navbar.Root>
            </PageTopbar.Navigation>
        </PageTopbar.Root>
    );
};
