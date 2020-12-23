import { HTMLProps, WithThemeProp } from '../../utils';
import { TextSizes } from "../../theme/core/text/types"
import { TextWeights, TextAlignments } from '../../theme/core/text/types';
export interface TextProps extends HTMLProps<HTMLElement>, WithThemeProp {
    /**Text Size */
    textSize: TextSizes;
    /** Text color */
    textColor?: string;
    /** Text Uppercase*/
    uppercase?: boolean;
    /** Line through text */
    lineThrough?: boolean;
    /**Text Line Height */
    lineHeight?:string;
    /** Text Hover Color */
    hoverColor?:string;
    /** Text Active Color*/
    activeColor?:string;
    /** Text weight */
    textWeight?: TextWeights;
    /** Text alignment */
    textAlign?:TextAlignments;
}
