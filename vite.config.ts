import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [
            react(),
            svgr({
                svgrOptions: {
                    icon: true,
                    exportType: 'default',
                },
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use '@/shared/config/scss' as *;`,
                },
            },
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('src', import.meta.url)),
            },
        },
        server: {
            proxy: {
                '/api': {
                    target: `http://${env.VITE_BACKEND_DOMAIN}`,
                    changeOrigin: true,
                },
            },
        },
    };
});
