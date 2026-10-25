export const PollEndpoints = {
    LIST: '/polls/filtered-list',
    CREATE: '/polls',
    getOverview: (pollId: string) => `/polls/${pollId}/overview`,
    getResults: (pollId: string) => `/polls/${pollId}/results`,
    edit: (pollId: string) => `/polls/${pollId}`,
    changeStatus: (pollId: string) => `/polls/${pollId}/status`,
    submitVote: (pollId: string) => `/polls/${pollId}/vote`,
    retractVote: (pollId: string) => `/polls/${pollId}/vote`,
} as const;
