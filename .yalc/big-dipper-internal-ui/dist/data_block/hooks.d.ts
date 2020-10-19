import { UseDataBlockHookProps, DurationCallback } from './types';
export declare const useDataBlockHook: ({ selectedValue }: UseDataBlockHookProps) => {
    selected: string | number | null;
    handleChange: (event: any) => void;
    handleCallback: (value: string | number, callback?: DurationCallback | undefined) => void;
};
