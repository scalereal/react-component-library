import { HTMLProps, WithThemeProp } from '../../utils'
import { TextSizes } from '../../theme/core/text/types'

export interface ModalProps extends HTMLProps<HTMLDivElement>, WithThemeProp {
    /** Modal Title */
    title: string;
    /** Modal Description */
    description: string;
    /** Modal Border Color */
    borderColor?:string;
    /** Modal Shadow Color */
    shadowColor?:string;
    /** Modal Title Size */
    titleSize: TextSizes;
    /** Modal Description Size */
    descriptionSize: TextSizes;
    /** Modal Title Color */
    titleColor?:string;
    /** Modal Description Color */
    descriptionColor?:string;
};
