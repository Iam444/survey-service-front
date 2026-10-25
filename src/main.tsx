import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from './app/AppRoot';
import '@/app/styles/global.scss';

createRoot(document.querySelector('#oty')!).render(
    <StrictMode>
        <AppRoot />
    </StrictMode>,
);
