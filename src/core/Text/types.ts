import React, { RefObject  } from 'react';
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
export interface TextProps extends HTMLProps<HTMLElement>, WithThemeProp {
    /**Text Size */
    textSize: TextSizes
    /** Text color */
    textColor?: string;
    /** Text Uppercase*/
    uppercase?: boolean;
    /** Line through text */
    lineThrough?: boolean;
    /**Text Line Height */
    lineHeight?:string;
}
