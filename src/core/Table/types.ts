import { ReactNode } from "react";
import { HTMLProps, Omit, WithThemeProp } from '../../utils';


export type RadioSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' ;
export type LabelPositions = 'left'| 'right'| 'top'| 'bottom';
export type displayStyle = 'inline' | 'block';

export interface Props extends Omit<HTMLProps<HTMLTableElement>,'size'|'onChange' >,WithThemeProp {
    children?:ReactNode;
     /** Options */
    thData?: {id:any,data:any}[];
    tdData?:{trId:any,trData:{tdId:any,tdData:any}[]}[];
    borderColor?:string
    thBgColor?:string;
    thTextColor?:string;
    hoverEffect?:boolean;
    nthTrBgColor?:string;
    hoverTrBgColor?:string;
}