import React from "react"
export interface ListProps extends React.HTMLProps<HTMLUListElement> {
    /** List items direction */
    variant?: 'horizontal' | 'vertical';
}
