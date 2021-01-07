import { grey } from '../../Colors';
import { ToggleTheme } from './types';

export const toggleTheme: ToggleTheme = {
    sizes: {
        XS: '20px',
        S: '24px',
        M: '28px',
        L: '32px',
        XL: '40px'
    },
    borderColor: '#ffffff',
    checkedBackgroundColor: grey[800],
    backgroundColor: grey[300],
    disabledBackgroundColor: grey[300],
    shadowColor:grey[300],
};