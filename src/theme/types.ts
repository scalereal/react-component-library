import * as CoreThemes from './core/types';
import { LoaderTheme } from './loader/types';

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

    warningColor:string;
    warningHoverColor:string;
    warningActiveColor:string;
    warningFocusColor:string;
    warningDisabledColor:string;

    dangerColor:string;
    dangerHoverColor:string;
    dangerActiveColor:string;
    dangerFocusColor:string;
    dangerDisabledColor:string;

    successColor:string;
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

export interface CoreTheme {
    card?: CoreThemes.CardTheme;
    input?: CoreThemes.InputTheme;
    label?: CoreThemes.LabelTheme;
    link?: CoreThemes.LinkTheme;
    modal?: CoreThemes.ModalTheme;
    toggle?: CoreThemes.ToggleTheme;
    toast?: CoreThemes.ToastTheme;
    colors?: CoreThemes.ColorsTheme;
    text?: CoreThemes.TextTheme;
    list?: CoreThemes.ListTheme;
}
export interface Theme extends CoreTheme {
    loader?: LoaderTheme;
}

export interface ToggleSizes{
    XS?:string;
    S?:string;
    M?:string;
    L?:string;
    XL?:string;
}
