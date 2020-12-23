import { grey } from '../../core/colors';
import { LinkTheme } from './types';

export const linkTheme: LinkTheme = {
    sizes: {
        XS: {
            fontSize: '1rem',
        },
        S: {
            fontSize: '1.2rem',
        },
        M: {
            fontSize: '1.4rem',
        },
        L: {
            fontSize: '1.6rem',
        },
        XL: {
            fontSize: '1.8rem',
        }
    },
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    defaults: {
        linkColor: grey[800],
        hoverColor: grey[700],
        activeColor: grey[600],
    }
};

