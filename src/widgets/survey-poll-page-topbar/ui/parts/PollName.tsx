import { Typography } from '@/shared/ui/typography';
import { Skeleton } from '@/shared/ui/skeleton';
import { usePollOverview } from '@/entities/survey-poll';
import type { FC } from 'react';
import type { IPollNameProps } from './PollName.props';

export const PollName: FC<IPollNameProps> = ({ pollId }) => {
    const { data: pollOverview, isFetching, isMutating } = usePollOverview(pollId);

    if (isFetching || isMutating || !pollOverview) {
        return <Skeleton fit="title-large" width="280px" />;
    }

    return (
        <Typography element="h2" type="title" size="large" useTruncation>
            {pollOverview.name}
        </Typography>
    );
};
