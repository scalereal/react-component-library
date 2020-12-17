import React, { RefObject  } from 'react';
import { AnyStyledComponent } from 'styled-components';
import { LabelSizes } from "../../theme/core/label/types"
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

export interface LabelProps extends HTMLProps<HTMLLabelElement>, WithThemeProp   {
    /** Shows pointer while hovering on it*/
    showPointer?: boolean;
    /** Shows red color asterisk*/
    required?: boolean;
    /** Label Color */
    labelColor?: string;
    /** Label Size */
    labelSize: LabelSizes;
    /** Label Hover Color*/
    hoverColor?:string;
}
