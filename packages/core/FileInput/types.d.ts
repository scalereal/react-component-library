import { MouseEvent } from 'react';
import { HTMLProps, Omit, WithThemeProp } from '../../utils';
export declare type fileInputSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'onChange'>, WithThemeProp {
    size?: fileInputSizes;
    textColor?: string;
    btnBgColor?: string;
    btnHoverBgColor?: string;
    btnTextColor?: string;
    borderColor?: string;
    btnHoverBorderColor?: string;
    hoverEffect?: boolean;
    disabled?: boolean;
    /** Error Text */
    errorText?: string;
    hasError?: boolean;
    onChange?: (event: MouseEvent<HTMLInputElement>) => void;
}
