import React, { RefObject  } from 'react';
import { AnyStyledComponent } from 'styled-components';
import { LinkSizes } from "../../theme/core/link/types"
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
export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
    /** Link url */
    href: string;
    /** Link Size */
    linkSize: LinkSizes,
    /** Link Color */
    linkColor?:string;
    /** Link Hover Color */
    hoverColor?:string
    /** Link Active Color*/
    activeColor?:string
}
