export interface ButtonTheme {
    defaults: {
        bgColor: string;
        textColor: string;
        hoverTextColor: string;
        hoverBgColor: string;
        hoverShadowColor: string;
    };
    primary: {
        bgColor: string;
        hoverBgColor: string;
    };
    secondary: {
        bgColor: string;
        hoverBgColor: string;
        textColor: string;
        borderColor: string;
        hoverBorderColor: string;
    };
    danger: {
        bgColor: string;
        hoverBgColor: string;
    };
    warning: {
        bgColor: string;
        hoverBgColor: string;
    };
    success: {
        bgColor: string;
        hoverBgColor: string;
    };
}
