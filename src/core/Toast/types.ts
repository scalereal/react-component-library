export type ToastVariants = 'success' | 'danger' | 'info' | 'warning';

export type ToastProps =  {
    /** Toast Variant */
    variant: string;
    /** Toast Title */
    title?: string;
    /** Toast message */
    message?: string;
};
