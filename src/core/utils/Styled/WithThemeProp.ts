import * as React from "react"
import { Theme } from "../../../theme"
export interface WithThemeProp {
    theme?: Theme;
    // eslint-disable-next-line no-undef
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}
