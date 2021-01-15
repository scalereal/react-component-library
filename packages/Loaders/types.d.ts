import { HTMLProps, Omit, WithThemeProp } from '../utils';
export declare type Sizes = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL';
export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size'>, WithThemeProp {
    visible?: boolean;
    size?: Sizes;
    Color?: string;
}
export declare const SizeMap: Props['size'][];
