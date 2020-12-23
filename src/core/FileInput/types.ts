import { MouseEvent } from 'react';
import { HTMLProps, Omit, WithThemeProp } from '../../utils';

export type RadioSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' ;
export type LabelPositions = 'left'| 'right'| 'top'| 'bottom';


export interface Props extends Omit<HTMLProps<HTMLInputElement>,'size'|'onChange' >,WithThemeProp {
    size?:RadioSizes;
    label?:string;
    value?:any;
    checked?:boolean;
    bgColor?:string;
    labelColor?:string;
    hoverEffect?:boolean;
    hoverLabelColor?:string;
    disabled?:boolean;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label Variant */
    labelVariant?: string;
    /** Label Weight */
    labelWeight?: string;
    /** Indeterminate state for checkbox */
    indeterminate?: boolean;
    /** Error Text */
    errorText?: string;
    /** Function will called with the input value on blur, change and invalid event */
    validator?: (checked: boolean) => string;
    /** This will be used internally by Checkbox group */
    hasError?: boolean;
    onChange?:(event:MouseEvent<HTMLInputElement>)=>void;
}