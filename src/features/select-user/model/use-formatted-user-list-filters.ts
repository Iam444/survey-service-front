import { useMemo } from 'react';
import type { TGetUserListRequest, TUser } from '@/entities/user';

export const useFormattedUserListFilters = (
    searchString: string,
    excludedUserIds?: TUser['id'][],
    includedUserIds?: TUser['id'][],
): TGetUserListRequest['filters'] => {
    return useMemo(() => {
        let formattedFilters: TGetUserListRequest['filters'] = {};

        if (excludedUserIds && excludedUserIds.length > 0) {
            formattedFilters = { ...formattedFilters, id: { ...formattedFilters.id, notIn: excludedUserIds } };
        }

        if (includedUserIds) {
            formattedFilters = { ...formattedFilters, id: { ...formattedFilters.id, in: includedUserIds } };
        }

        if (searchString !== '') {
            formattedFilters = {
                ...formattedFilters,
                _or: [
                    { email: { contains: searchString } },
                    { name: { contains: searchString } },
                    { surname: { contains: searchString } },
                    { fullName: { contains: searchString } },
                ],
            };
        }

        return Object.keys(formattedFilters).length > 0 ? formattedFilters : undefined;
    }, [excludedUserIds, includedUserIds, searchString]);
};
