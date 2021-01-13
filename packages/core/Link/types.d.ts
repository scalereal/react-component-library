import { LinkSizes } from '../../theme/core/link/types';
import { HTMLProps, WithThemeProp } from '../../utils';
export interface LinkProps extends HTMLProps<HTMLAnchorElement>, WithThemeProp {
    /** Link url */
    href: string;
    /** Link Size */
    linkSize: LinkSizes;
    /** Link Color */
    linkColor?: string;
    /** Link Hover Color */
    hoverColor?: string;
    /** Link Active Color*/
    activeColor?: string;
}
