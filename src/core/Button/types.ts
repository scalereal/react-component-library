import { ElementType, ReactNode } from 'react';
import { HTMLProps, Omit, WithThemeProp } from '../../utils';

export type ComponentSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

export type ButtonType = 'primary' | 'secondary' | 'warning' | 'danger' | 'success';

export type ButtonEdges = 'squared' | 'rounded' | 'circle';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'type'>, WithThemeProp {
    type?: ButtonType;
    icon?: ElementType;
    textSize?: ComponentSize;
    size?: ComponentSize;
    edges?: ButtonEdges;
    fullWidth?: boolean;
    className?: string;
    children?: ReactNode;
    loading?: boolean;
    bgColor?: string;
    textColor?: string;
    hoverEffect?: boolean;
    hoverTextColor?: string;
    hoverBgColor?: string;
    hoverShadowColor?: string;
    disabled?: boolean;
}
