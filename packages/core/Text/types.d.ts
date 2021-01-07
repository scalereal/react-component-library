import { TextAlignments, TextSizes, TextWeights } from '../../theme/core/text/types';
import { HTMLProps, WithThemeProp } from '../../utils';
export interface TextProps extends HTMLProps<HTMLElement>, WithThemeProp {
    /** Text Size */
    textSize?: TextSizes;
    /** Text color */
    textColor?: string;
    /** Text Uppercase*/
    uppercase?: boolean;
    /** Line through text */
    lineThrough?: boolean;
    /** Text Line Height */
    lineHeight?: string;
    /** Hover Effect */
    hoverEffect?: boolean;
    /** Text Hover Color */
    hoverColor?: string;
    /** Text Active Color*/
    activeColor?: string;
    /** Text weight */
    textWeight?: TextWeights;
    /** Text alignment */
    textAlign?: TextAlignments;
}
