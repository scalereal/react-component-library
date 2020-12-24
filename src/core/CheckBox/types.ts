
export type CheckBoxSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' ;
export type LabelPositions = 'left'| 'right'| 'top'| 'bottom';

export interface Props{
    size?:CheckBoxSizes;
    label?:string;
    value?:string|number|any;
    error?:boolean;
    bgColor?:string;
    labelColor?:string;
    hoverEffect?:boolean;
    hoverLabelColor?:string;
    hoverBgColor?:string;
    hoverShadowColor?:string;
    hoverLabelShadowColor?:string;
    disabled?:boolean;
    fullWidth?: boolean;
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
}