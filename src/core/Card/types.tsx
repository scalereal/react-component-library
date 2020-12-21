import React, { RefObject } from 'react';
import { AnyStyledComponent } from 'styled-components';
import { TextSizes } from "../../theme/core/text/types"
export interface WithStyle {
    Style?: AnyStyledComponent;
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type HTMLPropsReact<T> = Omit<React.HTMLProps<T>, 'ref' | 'as'>;

export interface HTMLProps<T> extends HTMLPropsReact<T> {
    ref?: ((instance: T) => void) | RefObject<T>;
}
export interface WithThemeProp {
    // eslint-disable-next-line no-undef
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export type CardDirection = 'horizontal' | 'vertical';
export type CardTextAlignment = 'left' | 'center' | 'right';

export interface CardProps extends HTMLProps<HTMLDivElement>, WithThemeProp {
    /** Card Image */
    imgSrc?: string;
    /** Card Title */
    title: string;
    /** Card Description */
    description: string;
    /** Card Direction */
    variant: CardDirection;
    /** Card Text Alignment */
    textAlignment: CardTextAlignment;
    /** Card Border Color */
    borderColor?:string;
    /** Card Shadow Color */
    shadowColor?:string;
    /** Card Title Size */
    titleSize: TextSizes;
    /** Card Description Size */
    descriptionSize:TextSizes;
    /** Card Title Color */
    titleColor?:string;
    /** Card Description Color */
    descriptionColor?:string;
};
