export interface ToastTheme {
    statusColor: {
        [key: string]: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
    };
    shadowColor: string;
    borderColor: string;
}
