let accessToken: string | null = null;

export const authToken = {
    getAccessToken: () => accessToken,
    setAccessToken: (token: string) => {
        accessToken = token;
    },
    resetAccessToken: () => {
        accessToken = null;
    },
};
