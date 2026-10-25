export const AuthPathTree = {
    Root: {
        PATH: 'auth',
        getFullPath: () => `/${AuthPathTree.Root.PATH}` as const,
        getRoute: () => AuthPathTree.Root.getFullPath(),
    },
};
