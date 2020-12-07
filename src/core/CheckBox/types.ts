
export type CheckBoxSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' ;

export interface Props{
    size?:CheckBoxSizes;
    type?:string;
    bgColor?:string;
    textColor?:string;
    hoverEffect?:boolean;
    hoverTextColor?:string;
    hoverBgColor?:string;
    hoverShadowColor?:string;
    hoverTextShadowColor?:string;
    disabled?:boolean;
}