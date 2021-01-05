import { defaultTheme } from '../../theme'
import { AvatarTheme } from './types'
export const  avatarTheme : AvatarTheme = {
    defaults:{
        bgColor:defaultTheme.secondaryColor,
        hoverBgColor:defaultTheme.primaryActiveColor,
        shadowColor:defaultTheme.shadowColor,
        textColor:defaultTheme.primaryColor,
        hoverTextColor:defaultTheme.whiteColor
    }
}