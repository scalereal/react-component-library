
export type AvatarSizes = 'ES' | 'S' | 'M' | 'L' ;

export interface Props{
    size?: AvatarSizes;
    bgColor?:string;
    textColor?:string;
    hoverEffect?:boolean;
    hoverTextColor?:string;
    hoverBgColor?:string;
    hoverShadowColor?:string;
    hoverTextShadowColor?:string;
    res?: string;
    disabled?:boolean;
}