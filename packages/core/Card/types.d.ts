import { TextSizes } from '../../theme/core/text/types';
import { HTMLProps, WithThemeProp } from '../../utils';
export declare type CardDirection = 'horizontal' | 'vertical';
export declare type CardTextAlignment = 'left' | 'center' | 'right';
export interface CardProps extends HTMLProps<HTMLDivElement>, WithThemeProp {
    /** Card Image */
    imgSrc?: string;
    /** Card Title */
    title?: string;
    /** Card Description */
    description?: string;
    /** Card Direction */
    variant?: CardDirection;
    /** Card Text Alignment */
    textAlignment?: CardTextAlignment;
    /** Card Border Color */
    borderColor?: string;
    /** Card Shadow Color */
    shadowColor?: string;
    /** Card Title Size */
    titleSize?: TextSizes;
    /** Card Description Size */
    descriptionSize?: TextSizes;
    /** Card Title Color */
    titleColor?: string;
    /** Card Description Color */
    descriptionColor?: string;
}
