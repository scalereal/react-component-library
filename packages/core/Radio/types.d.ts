import { MouseEvent } from 'react';
import { HTMLProps, Omit, WithThemeProp } from '../../utils';
export declare type RadioSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export declare type LabelPositions = 'left' | 'right' | 'top' | 'bottom';
export interface Props extends Omit<HTMLProps<HTMLLabelElement>, 'size' | 'onChange'>, WithThemeProp {
    size?: RadioSizes;
    label?: string;
    value?: any;
    checked?: boolean;
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
    onChange?: (event: MouseEvent<HTMLInputElement>) => void;
}
