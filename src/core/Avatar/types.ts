
export type AvatarSizes = 'S' | 'M' | 'L';

export interface Props{
    size?: AvatarSizes;
    bgColor?:string;
    textColor?:string;
    hoverEffect?:boolean;
    hoverTextColor?:string;
    hoverBgColor?:string;
    hoverTextShadowColor?:string;
    hoverImageShadowColor?:string;
    children?: string;
}

export interface StyledProps extends Props {
    /** To check children is image */
    isImage?: boolean;
}