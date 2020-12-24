import { ReactNode } from 'react';
import { HTMLProps, WithThemeProp } from '../../utils';

export type RadioSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' ;
export type LabelPositions = 'left'| 'right'| 'top'| 'bottom';
export type displayStyle = 'inline' | 'block';

export interface Props extends HTMLProps<HTMLUListElement>,WithThemeProp {
    display?: displayStyle;
    children?:ReactNode;
     /** Options */
     options?: {
        id?:any;
        value?: any;
        label?: string;
        showSelectAll?: boolean;
        disabled?: boolean;
        errorText?: string;
        helperText?: string;
        columns?: number;
    }[];
}