import { ToggleSizes } from "./types";

export type ComponentSize = 'default' | 'large' | 'small';

export const sidePaddings: { [key in ComponentSize]: number } = {
    large: 30,
    default: 25,
    small: 20
};

export const heights: { [key in ComponentSize]: number } = {
    large: 55,
    default: 45,
    small: 35
};
export const toggleSizes :ToggleSizes = {
    XS: '20px',
    S: '24px',
    M: '28px',
    L: '32px',
    XL: '40px'
}