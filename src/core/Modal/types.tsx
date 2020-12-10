import React, { RefObject } from 'react';
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

export type ModalDirection = 'column' | 'row';
export type ModalTextAlignment = 'left' | 'center' | 'right';
export interface ModalProps extends HTMLProps<HTMLDivElement>, WithThemeProp {
    /** Modal Title */
    title: string;
    /** Modal Description */
    description: string;
};
