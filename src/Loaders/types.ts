import { HTMLProps, Omit, WithThemeProp } from '../utils';

export type Sizes = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' ;

export interface Props extends Omit<HTMLProps<HTMLDivElement>,'size'>,WithThemeProp {
    visible?: boolean;
    size?: Sizes;
    Color?: string;
}

export const SizeMap: Props['size'][] = ['XXS','XS', 'S', 'M', 'L', 'XL'];
