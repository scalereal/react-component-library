import { grey } from '../../core/colors';
import { TextTheme } from './types';

export const textTheme: TextTheme = {
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
    weights: {
        light: {
            weight: '300'
        },
        regular: {
            weight:'400'
        },
        medium: {
            weight:'600'
        },
        strong: {
            weight:'700'
        },
        extraStrong: {
            weight:'800'
        }
    },
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    defaults: {
        textColor: grey[800],
        lineHeight: '1',
        hoverColor:grey[700],
        activeColor:grey[600],
        textAlign:'left',
        textWeight:'400',
        size:'S',
    }
};
