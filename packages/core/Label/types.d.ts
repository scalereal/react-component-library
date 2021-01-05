import { HTMLProps, WithThemeProp } from '../../utils';
import { LabelSizes, LabelWeights } from '../../theme/core/label/types';
export interface LabelProps extends HTMLProps<HTMLLabelElement>, WithThemeProp {
    /** Shows pointer while hovering on it*/
    showPointer?: boolean;
    /** Shows red color asterisk*/
    required?: boolean;
    /** Label Color */
    labelColor?: string;
    /** Label Size */
    labelSize: LabelSizes;
    /** Label Uppercase*/
    uppercase?: boolean;
    /** Label Line Height */
    lineHeight?: string;
    /** Label weight */
    labelWeight?: LabelWeights;
}
