import React from 'react';

export interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
    /** Link url */
    href: string;
}
