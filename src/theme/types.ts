export interface DefaultTheme {
    primaryColor: string;
    primaryHoverColor: string;
    primaryActiveColor: string;
    primaryFocusColor: string;
    primaryDisabledColor: string;

    secondaryColor: string;
    secondaryHoverColor: string;
    secondaryActiveColor: string;
    secondaryFocusColor: string;
    secondaryDisabledColor: string;

    shadowColor: string;
    iconColor:string;
    borderColor:string;
    blackColor:string;
    whiteColor:string;

    inputColor:string;
    inputBackgroundColor:string;
    inputDisabledColor:string;
    inputPlaceHolderColor:string;
    inputPreffixAndSuffixBackgroundColor:string;

    linkColor:string;
    linkActiveColor:string;
    linkHoverColor:string;

    typographyColor:string;

    statusColors: statusColors

    warningHoverColor:string;
    warningActiveColor:string;
    warningFocusColor:string;
    warningDisabledColor:string;

    dangerHoverColor:string;
    dangerActiveColor:string;
    dangerFocusColor:string;
    dangerDisabledColor:string;

    successHoverColor:string;
    successActiveColor:string;
    successFocusColor:string;
    successDisabledColor:string;

    infoHoverColor:string;
    infoActiveColor:string;
    infoFocusColor:string;
    infoDisabledColor:string;
}

type statusColors = {
    [key: string]: string;
    warning: string; 
    danger: string;
    success: string;
    info:string;
};

export type ToggleSizes = {
    [key: string]: string;
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
}

export interface SpacingTheme {
    S1: string;
    S2: string;
    S3: string;
    S4: string;
    M1: string;
    M2: string;
    M3: string;
    L1: string;
    L2: string;
    L3: string;
    L4: string;
}