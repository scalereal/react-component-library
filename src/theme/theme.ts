import { blue, green, grey, orange, red } from "./Colors";
import { DefaultTheme } from "./types";

export const defaultTheme : DefaultTheme = {
    primaryColor: blue[500],
    primaryHoverColor: blue[700],
    primaryActiveColor: blue[600],
    primaryFocusColor: blue[600],
    primaryDisabledColor: blue[300],

    secondaryColor: grey[500],
    secondaryHoverColor: grey[700],
    secondaryActiveColor: grey[600],
    secondaryFocusColor: grey[600],
    secondaryDisabledColor: grey[300],

    shadowColor:grey[500],
    iconColor:grey[800],
    borderColor:grey[500],
    whiteColor:'#ffffff',
    blackColor:'#000000',

    linkColor:blue[500],
    linkActiveColor:blue[600],
    linkHoverColor:blue[700],

    inputColor:grey[800],
    inputBackgroundColor:'#ffffff',
    inputDisabledColor:grey[300],
    inputPlaceHolderColor:grey[800],
    inputPreffixAndSuffixBackgroundColor:grey[500],

    typographyColor:grey[800],

    statusColors: {
        warning: orange[500],
        danger: red[500],
        success: green[500],
        info: blue[500],
    },

    warningColor: orange[500],
    warningHoverColor: orange[700],
    warningActiveColor:orange[600],
    warningFocusColor:orange[600],
    warningDisabledColor:orange[300],

    dangerColor: red[500],
    dangerHoverColor: red[700],
    dangerActiveColor:red[600],
    dangerFocusColor:red[600],
    dangerDisabledColor:red[300],

    successColor: green[500],
    successHoverColor: green[700],
    successActiveColor: green[600],
    successFocusColor: green[600],
    successDisabledColor: green[300],

    infoHoverColor: blue[700],
    infoActiveColor:blue[600],
    infoFocusColor:blue[600],
    infoDisabledColor:blue[300],
};

