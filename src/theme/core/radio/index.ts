import { grey } from '../../Colors'
import { defaultTheme } from '../../theme'
import { RadioTheme } from './types'
export const  radioTheme : RadioTheme = {
    defaults:{
        bgColor:grey[200],
        textColor:defaultTheme.typographyColor,
        errorTextColor:defaultTheme.dangerColor,
        hoverBgColor:grey[300],
        borderColor:defaultTheme.borderColor,
        shadowColor:defaultTheme.shadowColor,
        checkedBgColor:defaultTheme.primaryColor,
        hoverCheckedBgColor:defaultTheme.primaryActiveColor
    }
}