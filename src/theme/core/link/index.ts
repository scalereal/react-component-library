import { blue } from '../../Colors';
import { LinkTheme } from './types';

const link: LinkTheme = {
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
    defaults: {
        linkColor: blue[500],
        hoverColor: blue[700],
        activeColor: blue[600],
    }
};

export default link;
