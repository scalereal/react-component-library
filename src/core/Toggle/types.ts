import React, { RefObject  } from 'react';
import { AnyStyledComponent } from 'styled-components';

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


type DivProps = Omit<HTMLProps<HTMLInputElement>, 'size'>;
type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type'>;


export type ToggleSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
export interface ToggleWrapperProps extends DivProps, WithThemeProp {
    /** Toggle size */
    size?: ToggleSizes;
}
export interface ToggleProps extends InputProps, WithThemeProp {
    /** Toggle size */
    size?: ToggleSizes;
    /** I Agree */
    required?: boolean;
}
