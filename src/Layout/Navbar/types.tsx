import { ReactNode } from 'react';
import { HTMLProps, WithThemeProp } from '../../utils/Styled';


export interface Props extends HTMLProps<HTMLDivElement>,WithThemeProp {
    bgColor?:string;
    popBgColor?:string;
    shadowColor?:string;
    popShadowColor?:string;
    navOptions?:{option?:ReactNode}[];
    Logo?:ReactNode;
}