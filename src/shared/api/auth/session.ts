let isLoggingOutTriggered: boolean = false;

export const session = {
    isLoggingOut: () => isLoggingOutTriggered,
    setIsLoggingOut: (isLoggingOut: boolean) => {
        isLoggingOutTriggered = isLoggingOut;
    },
};
