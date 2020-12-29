import { grey } from '../../Colors'
import { defaultTheme } from "../../theme"
import { FileInputTheme } from "./types"
export const  fileInputTheme : FileInputTheme = {
    defaults:{
        textColor:defaultTheme.typographyColor,
        btnTextColor:defaultTheme.primaryColor,
        errorTextColor:defaultTheme.dangerColor,
        btnHoverBgColor:grey[300],
        borderColor:grey[200],
        btnHoverBorderColor:defaultTheme.primaryColor,
        hoverBorderColor:grey[200],
        btnBgColor:grey[300]
    }
}