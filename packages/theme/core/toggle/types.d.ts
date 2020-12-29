export declare type ToggleSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export interface ToggleTheme {
    sizes: {
        [k in ToggleSizes]: string;
    };
    borderColor: string;
    checkedBackgroundColor: string;
    backgroundColor: string;
    disabledBackgroundColor: string;
    shadowColor: string;
}
