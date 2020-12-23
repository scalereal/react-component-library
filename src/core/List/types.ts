import { HTMLProps, WithThemeProp } from '../../utils';
export interface ListProps extends HTMLProps<HTMLUListElement>, WithThemeProp {
    /** List items direction */
    variant?: 'horizontal' | 'vertical';
}
