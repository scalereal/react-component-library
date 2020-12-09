import React from "react"
export interface InputProps extends React.HTMLProps<HTMLInputElement>{
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Prefix  */
    prefix?: string;
    /** Suffix */
    suffix?: string;
    /** Disable Input */
    disabled?: boolean;
    /** To be used when it is required in any form */
    required?: boolean;
}
