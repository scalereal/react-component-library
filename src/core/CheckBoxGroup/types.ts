import { ReactNode } from "react";

export type CheckBoxSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' ;
export type LabelPositions = 'left'| 'right'| 'top'| 'bottom';
export type displayStyle = 'inline' | 'block';

export interface Props{
    display?: displayStyle;
    children?:ReactNode;
     /** Options */
     options: {
        value: any;
        label: string;
        showSelectAll?: boolean;
        disabled?: boolean;
        errorText?: string;
        helperText?: string;
        columns?: number;
    }[];
}