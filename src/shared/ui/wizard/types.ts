export type TNextStepIdGetter = (() => Promise<string | null>) | (() => string | null) | string | null;
