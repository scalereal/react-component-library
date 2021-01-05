import { grey, green, blue, red, orange  } from '../../core/colors'
import { ToastTheme } from './types'

export const toastTheme: ToastTheme = {
    statusColor: {
        success: {
            color:green[500],
            bgColor:green[100],
            borderColor:green[300]
        },
        info: {
            color:blue[500],
            bgColor:blue[100],
            borderColor:blue[300]
        },
        warning: {
            color:orange[500],
            bgColor:orange[100],
            borderColor:orange[300]
        },    
        danger: {
            color:red[500],
            bgColor:red[100],
            borderColor:red[300]
        }
    },
    defaults:{
        position:{
            top:'0',
            right:'0',
        },
        shadowColor: grey[500],
        borderColor:grey[500],
    }
};