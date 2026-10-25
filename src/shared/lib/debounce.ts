export function debounce<T extends (...args: Parameters<T>) => void>(callback: T, delayMS: number = 500): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function (...args: Parameters<T>): void {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            callback(...args);

            timeoutId = null;
        }, delayMS);
    };
}
