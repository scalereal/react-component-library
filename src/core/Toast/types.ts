import { HTMLProps } from '../../utils';

export type ToastVariants = 'success' | 'danger' | 'info' | 'warning';

export type ToastProps = Omit<HTMLProps<HTMLDivElement>, 'id' | 'action'> & {
    /** Toast Id */
    id?: number;
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
    shadowColor?:string;
    /**Toast Border Color */
    borderColor?:string;
};
