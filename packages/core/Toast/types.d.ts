import { HTMLProps, Omit, WithThemeProp } from '../../utils';
export declare type ToastVariants = 'success' | 'danger' | 'info' | 'warning';
export interface ToastProps extends Omit<HTMLProps<HTMLDivElement>, 'id' | 'action'>, WithThemeProp {
    /** Toast Id */
    id: number;
    /** Toast Variant */
    variant: string;
    /** Toast Title */
    title: string;
    /** Toast message */
    message: string;
    /** Toast Title Color */
    titleColor?: string;
    /** Toast message Color*/
    messageColor?: string;
    /** Toast Shadow Color */
    shadowColor?: string;
    /** Toast Border Color */
    borderColor?: string;
    /** Toast Position */
    position?: 'top-left' | 'top-center' | 'top-right' | 'right-center' | 'left-center' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    /** Toast Border Position */
    borderPosition: 'top' | 'right' | 'left' | 'bottom';
}
