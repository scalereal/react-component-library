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

export type ToastVariants = 'success' | 'danger' | 'info' | 'warning';

export type ToastProps = Omit<HTMLProps<HTMLDivElement>, 'id' | 'action'> & {
    /** Toast Id */
    id?: number;
    /** Toast Variant */
    variant: string;
    /** Toast Title */
    title: string;
    /** Toast message */
    message: string;
    /** Toast Title Color */
    titleColor?: string;
    /** Toast message Color*/
    messageColor?: string;
    /** Toast Shadow Color */
    shadowColor?:string;
    /**Toast Border Color */
    borderColor?:string;
};
