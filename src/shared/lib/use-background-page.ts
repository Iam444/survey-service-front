import { useNavigate, useLocation } from 'react-router-dom';

interface IUseBackgroundPageReturn {
    openOverlay: () => void;
    closeOverlay: (defaultPage: string) => void;
}

export const useBackgroundPage = (): IUseBackgroundPageReturn => {
    const navigate = useNavigate();
    const location = useLocation();

    return {
        openOverlay: () => sessionStorage.setItem('backgroundPage', location.pathname),
        closeOverlay: (defaultPage: string) => {
            const backgroundPage = sessionStorage.getItem('backgroundPage');

            sessionStorage.removeItem('backgroundPage');

            navigate(backgroundPage || defaultPage);
        },
    };
};
