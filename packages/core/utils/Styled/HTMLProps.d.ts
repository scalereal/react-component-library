import * as React from 'react';
import { Omit } from './Omit';
declare type HTMLPropsReact<T> = Omit<React.HTMLProps<T>, 'ref' | 'as'>;
export interface HTMLProps<T> extends HTMLPropsReact<T> {
    ref?: ((instance: T) => void) | React.RefObject<T>;
}
export {};
