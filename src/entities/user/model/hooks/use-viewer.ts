import { useQuery } from '@tanstack/react-query';
import { getViewer } from '../../api/get-viewer';
import { UserQueryKeys } from './user-keys';
import type { UseQueryResult } from '@tanstack/react-query';
import type { TGetViewerResponse } from '../../api/get-viewer';

export const useViewer = (): UseQueryResult<TGetViewerResponse> => {
    return useQuery({
        queryKey: UserQueryKeys.viewer(),
        queryFn: getViewer,
        staleTime: 5 * 60 * 1000,
    });
};
