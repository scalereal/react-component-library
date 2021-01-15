export declare type ToastVariant = 'success' | 'danger' | 'info' | 'warning';
export interface ToastTheme {
    statusColor: {
        [key in ToastVariant]: {
            color: string;
            bgColor: string;
            borderColor: string;
        };
    };
    defaults: {
        position: {
            top: string;
            right: string;
        };
        shadowColor: string;
        borderColor: string;
    };
}
