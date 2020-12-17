import { LoaderSizes } from "../../theme/loader/types";

import { HTMLProps, Omit, WithThemeProp } from '../../utils/Styled';

// eslint-disable-next-line no-undef
export type SVGProp = Omit<HTMLProps<HTMLOrSVGElement>, 'size'>;

export interface SvgLoaderProps extends SVGProp, WithThemeProp {
    /** Loader size */
    size: LoaderSizes;
    /** Loader color */
    color?: string;
}
