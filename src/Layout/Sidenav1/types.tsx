import * as React from 'react';
import { HTMLProps, WithThemeProp } from '../../utils/Styled';


export interface Props extends HTMLProps<HTMLDivElement>,WithThemeProp {
    bgColor?:string;
    hrColor?:string;
    shadowColor?:string;
    navOptions?:{option?:React.ReactNode}[];
    Logo?:React.ReactNode;
}