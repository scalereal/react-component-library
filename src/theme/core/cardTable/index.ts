import { defaultTheme } from '../../theme'
import { CardTableTheme } from './types'
export const  cardTableTheme : CardTableTheme = {
    defaults:{
        borderColor:defaultTheme.borderColor,
        headerBgColor:defaultTheme.whiteColor,
        hoverBorderColor:defaultTheme.primaryColor,
        trBgColor:defaultTheme.whiteColor,
        nthTrBgColor:defaultTheme.whiteColor,
        hoverTrBgColor:defaultTheme.whiteColor,
        hoverShadowColor:defaultTheme.shadowColor
    }
}