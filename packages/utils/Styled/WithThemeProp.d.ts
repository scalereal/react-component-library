import React from "react";
import { Theme } from "../../theme";
export interface WithThemeProp {
    theme?: Theme;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}
