import { TextSizes } from "../../theme/core/text/types";
import { HTMLProps, Omit, WithThemeProp } from '../../utils';
export declare type CheckBoxSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export declare type LabelPositions = 'left' | 'right' | 'top' | 'bottom';
export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size'>, WithThemeProp {
    size?: CheckBoxSizes;
    fontSize?: TextSizes;
    label?: string;
    checked?: boolean;
    value?: any;
    bgColor?: string;
    labelColor?: string;
    hoverEffect?: boolean;
    labelHoverEffect?: boolean;
    labelHoverColor?: string;
    hoverBgColor?: string;
    hoverShadowColor?: string;
    disabled?: boolean;
    labelPosition?: LabelPositions;
    errorText?: string;
    hasError?: boolean;
}
