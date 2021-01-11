import { HTMLProps, Omit, WithThemeProp } from '../../utils';

export type AvatarSizes = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' ;

export interface Props extends Omit<HTMLProps<HTMLDivElement>,'size'>,WithThemeProp {
    display?:boolean;
    size?: AvatarSizes;
    Color?:string;
}