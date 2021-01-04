import { defaultTheme } from '../../theme'
import { CheckBoxTheme } from './types'
export const  checkBoxTheme : CheckBoxTheme = {
    defaults:{
        bgColor:defaultTheme.primaryColor,
        textColor:defaultTheme.typographyColor,
        errorTextColor:defaultTheme.dangerColor,
        hoverBgColor:defaultTheme.primaryActiveColor,
        borderColor:defaultTheme.borderColor,
        shadowColor:defaultTheme.shadowColor,
    }
}