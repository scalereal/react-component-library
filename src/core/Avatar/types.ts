import { HTMLProps, Omit, WithThemeProp } from '../../utils/Styled';

export type AvatarSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' ;

export interface Props extends Omit<HTMLProps<HTMLDivElement>,'size'>,WithThemeProp {
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