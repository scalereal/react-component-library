import { defaultTheme } from "../../theme"
import { ButtonTheme } from "./types"
export const  buttonTheme : ButtonTheme = {
    defaults:{
        bgColor:defaultTheme.primaryColor,
        textColor:defaultTheme.whiteColor,
        hoverTextColor:defaultTheme.whiteColor,
        hoverBgColor:defaultTheme.primaryActiveColor,
        hoverShadowColor:defaultTheme.shadowColor,
    },
    primary:{
        bgColor:defaultTheme.primaryColor,
        hoverBgColor:defaultTheme.primaryActiveColor,
    },
    secondary:{
        bgColor:'transparent',
        hoverBgColor:'transparent',
        textColor:defaultTheme.secondaryActiveColor,
        borderColor:defaultTheme.secondaryColor,
        hoverBorderColor:defaultTheme.primaryActiveColor
    },
    danger:{
        bgColor:defaultTheme.dangerColor,
        hoverBgColor:defaultTheme.dangerActiveColor,
    },
    warning:{
        bgColor:defaultTheme.warningColor,
        hoverBgColor:defaultTheme.warningActiveColor,
    },
    success:{
        bgColor:defaultTheme.successColor,
        hoverBgColor:defaultTheme.successActiveColor,
    },
}