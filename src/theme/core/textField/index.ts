import { TextFieldTheme } from "./types";
import { grey,blue,red } from "../../Colors"
const textField: TextFieldTheme = {
    height: {
        S: '4rem',
        M: '5.6rem'
    },
    textVariant: {
        S: '1.2rem',
        M: '1.4rem'
    },
    outlined: {
        default: {
            bgColor: '#ffffff',
            borderColor: grey[500],
            iconColor: grey[600],
            textColor: '#111111',
            labelColor: grey[600],
            helperTextColor: grey[700]
        },
        hover: {
            borderColor: grey[600],
            shadowColor: grey[600]
        },
        disabled: { labelColor: grey[400], textColor: grey[800], borderColor: grey[300], bgColor: '#ffffff' },
        active: {
            bgColor: '#ffffff',
            placeholderColor: grey[300],
            borderColor: blue[500],
            labelColor: blue[500],
            shadowColor: blue[500]
        },
        error: {
            bgColor: '#ffffff',
            caretColor: red[500],
            placeholderColor: grey[300],
            cursorColor: red[500],
            borderColor: red[500],
            labelColor: red[500],
            helperTextColor: red[500],
            shadowColor: red[500]
        }
    },
    filled: {
        default: {
            borderColor: grey[700],
            bgColor: grey[100],
            iconColor: grey[700],
            textColor: '#111111',
            labelColor: grey[700],
            helperTextColor: grey[700]
        },
        hover: {
            borderColor: grey[700]
        },
        disabled: { bgColor: grey[100], labelColor: grey[400], textColor: grey[800], borderColor: grey[300] },
        active: {
            placeholderColor: 'rgba(0, 90, 238, .2)',
            bgColor: blue[100],
            borderColor: blue[500],
            labelColor: blue[500]
        },
        error: {
            caretColor: red[500],
            placeholderColor: 'rgba(204, 0, 0, .2)',
            bgColor: red[100],
            cursorColor: red[500],
            borderColor: red[500],
            labelColor: red[500],
            helperTextColor: red[500]
        }
    },
    fusion: {
        default: {
            borderColor: grey[400],
            bgColor: grey[100],
            textColor: '#111111',
            labelColor: grey[700],
            helperTextColor: grey[700]
        },
        hover: {
            bgColor: grey[100],
            borderColor: grey[600]
        },
        disabled: { bgColor: '#ffffff', labelColor: grey[400], textColor: grey[700], borderColor: grey[300] },
        active: {
            placeholderColor: grey[300],
            bgColor: '#ffffff',
            borderColor: blue[500],
            labelColor: blue[500]
        },
        error: {
            caretColor: '#111111',
            placeholderColor: grey[300],
            bgColor: '#FCF2F2',
            cursorColor: red[500],
            borderColor: red[500],
            labelColor: red[500],
            helperTextColor: red[500],
            defaultTextColor: red[500],
            activeTextColor: '#111111'
        }
    }
};

export default textField;
