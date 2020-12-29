import { HTMLProps, WithThemeProp } from '../../utils';
import { ToggleSizes } from "../../theme/core/toggle/types";
declare type DivProps = Omit<HTMLProps<HTMLInputElement>, 'size'>;
declare type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type'>;
export interface ToggleWrapperProps extends DivProps, WithThemeProp {
    /** Toggle size */
    size: ToggleSizes;
}
export interface ToggleProps extends InputProps, WithThemeProp {
    /** Toggle size */
    size: ToggleSizes;
    /** Toggle Disabled */
    disabled?: boolean;
}
export {};
