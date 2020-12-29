import { grey } from '../../Colors'
import { defaultTheme } from "../../theme"
import { TableTheme } from "./types"
export const  tableTheme : TableTheme = {
    defaults:{
        thBgColor:defaultTheme.primaryColor,
        thTextColor:defaultTheme.whiteColor,
        hoverTrBgColor:grey[300],
        borderColor:defaultTheme.borderColor,
        nthTrBgColor:grey[200]
    }
}