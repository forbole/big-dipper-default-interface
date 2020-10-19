import { ReactElement } from 'react';
export declare type DurationCallback = (key: string | number) => void;
export interface Duration {
    value: string | number;
    display: string;
    callback?: DurationCallback;
}
export interface DataBlockProps {
    label: string;
    durations?: Duration[];
    value: string;
    selectedValue?: string | number;
    customComponent?: ReactElement;
}
export interface UseDataBlockHookProps {
    selectedValue?: string | number | null;
}
