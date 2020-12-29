import { ReactNode } from "react";
import { TextSizes } from "../../theme/core/text/types";
import { HTMLProps, Omit, WithThemeProp } from '../../utils';

export type CheckBoxSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' ;
export type displayStyle = 'inline' | 'block';
export type LabelPositions = 'left'| 'right'| 'top'| 'bottom';

export interface Props extends Omit<HTMLProps<HTMLDivElement>,'size'>,WithThemeProp {
    display?: displayStyle;
    children?:ReactNode;
    showSelectAll?: boolean;
     /**grouped CheckBox Options */
    checkBoxOptions?: {
        id:string;
        value: any;
        label: string;
        disabled?: boolean;
        checked?:boolean;
    }[];

    size?:CheckBoxSizes;
    fontSize?:TextSizes;
    label?:string;
    labelPosition?: LabelPositions;
    bgColor?:string;
    labelColor?:string;
    hoverEffect?:boolean;
    labelHoverEffect?:boolean;
    labelHoverColor?:string;
    hoverBgColor?:string;
    hoverShadowColor?:string;
    disabled?:boolean;
    errorText?: string;
    hasError?: boolean;
}