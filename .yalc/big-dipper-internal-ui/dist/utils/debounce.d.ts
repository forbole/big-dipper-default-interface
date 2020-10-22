export interface userDebounceHookProps {
    value: string;
    delay: number;
    callback?: (value: string | number) => void;
}
export declare const useDebounceHook: ({ value, delay, callback, }: userDebounceHookProps) => void;
