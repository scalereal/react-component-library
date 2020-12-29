import { ToggleSizes } from "./types";
export declare type ComponentSize = 'default' | 'large' | 'small';
export declare const sidePaddings: {
    [key in ComponentSize]: number;
};
export declare const heights: {
    [key in ComponentSize]: number;
};
export declare const toggleSizes: ToggleSizes;
