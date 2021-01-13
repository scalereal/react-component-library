import { ReactNode } from 'react';
import { HTMLProps, WithThemeProp } from '../../utils/Styled';


export interface Props extends HTMLProps<HTMLDivElement>,WithThemeProp {
    bgColor?:string;
    hrColor?:string;
    shadowColor?:string;
    navOptions?:{option?:ReactNode}[];
    Logo?:ReactNode;
}