import { ReactNode } from "react";
import { HTMLProps, Omit, WithThemeProp } from '../../utils';
export declare type RadioSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export declare type LabelPositions = 'left' | 'right' | 'top' | 'bottom';
export declare type displayStyle = 'inline' | 'block';
export interface Props extends Omit<HTMLProps<HTMLTableElement>, 'size' | 'onChange'>, WithThemeProp {
    children?: ReactNode;
    /** Options */
    thData?: {
        id: any;
        data: any;
    }[];
    tdData?: {
        trId: any;
        trData: {
            tdId: any;
            tdData: any;
        }[];
    }[];
    borderColor?: string;
    thBgColor?: string;
    thTextColor?: string;
    hoverEffect?: boolean;
    nthTrBgColor?: string;
    hoverTrBgColor?: string;
}
