import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { PagesMap } from '@/shared/config/routes';
import { logOut } from '@/shared/api';

export const useLogOut = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return async () =>
        await logOut(async () => {
            queryClient.clear();
            await navigate(PagesMap.Auth.getRoute());
        });
};
