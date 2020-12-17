import { grey, green, blue, red, orange  } from '../../Colors';
import { ToastTheme } from './types';

const toastTheme: ToastTheme = {
    statusColor: {
        success: green[500],
        info: blue[500],
        warning: orange[500],
        danger: red[500]
    },
    shadowColor: grey[500],
    borderColor:grey[500]
};
export default toastTheme;
