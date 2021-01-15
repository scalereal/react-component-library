import { ReactNode } from 'react';
import { HTMLProps, WithThemeProp } from '../../utils';
export declare type RadioSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export declare type LabelPositions = 'left' | 'right' | 'top' | 'bottom';
export declare type displayStyle = 'inline' | 'block';
export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'onChange'>, WithThemeProp {
    display?: displayStyle;
    children?: ReactNode;
    /** Options */
    options?: {
        id?: any;
        value?: any;
        label?: string;
        disabled?: boolean;
        checked?: boolean;
    }[];
    size?: RadioSizes;
    mainLabel?: string;
    bgColor?: string;
    checkedBgColor?: string;
    hoverBgColor?: string;
    hoverCheckedBgColor?: string;
    labelColor?: string;
    hoverEffect?: boolean;
    labelHoverEffect?: boolean;
    hoverLabelColor?: string;
    disabled?: boolean;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Error Text */
    errorText?: string;
    /** This will be used internally by Checkbox group */
    hasError?: boolean;
}
