import { Outlet, Link } from 'react-router-dom';
import { Navbar } from '@/shared/ui/navbar';
import { Typography } from '@/shared/ui/typography';
import { PageTopbar } from '@/shared/ui/page-topbar';
import { useBackgroundPage } from '@/shared/lib/use-background-page';
import { Icon } from '@/shared/ui/icon';
import { ButtonLayout } from '@/shared/ui/button-layout';
import { PagesMap } from '@/shared/config/routes';
import type { FC } from 'react';

export const SurveyListPageLayout: FC = () => {
    const { openOverlay } = useBackgroundPage();

    return (
        <>
            <PageTopbar.Root>
                <PageTopbar.Content>
                    <Typography element="h3" type="title" size="large" weight="medium">
                        Список опросов
                    </Typography>

                    <ButtonLayout variant="solid" size="medium">
                        <Link to={PagesMap.PollCreation.getRoute()} onClick={openOverlay}>
                            <Icon name="plus" size="small" iconColor="strong" />
                            Создать опрос
                        </Link>
                    </ButtonLayout>
                </PageTopbar.Content>

                <PageTopbar.Navigation>
                    <Navbar.Root>
                        <Navbar.List>
                            <Navbar.Item>
                                <Navbar.Link to={PagesMap.Polls.getRoute()}>Голосования</Navbar.Link>
                            </Navbar.Item>

                            <Navbar.Item>
                                <Navbar.Link to="/" style={{ cursor: 'not-allowed' }} onClick={(e) => e.preventDefault()}>
                                    Формы
                                </Navbar.Link>
                            </Navbar.Item>
                        </Navbar.List>
                    </Navbar.Root>
                </PageTopbar.Navigation>
            </PageTopbar.Root>

            <Outlet />
        </>
    );
};
