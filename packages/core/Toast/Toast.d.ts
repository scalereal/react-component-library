import * as React from 'react';
import { WithStyle } from '../../utils';
import { ToastProps } from './types';
export declare const variants: ToastProps['variant'][];
export declare const positions: ToastProps['position'][];
export declare const borderPositions: ToastProps['borderPosition'][];
export declare const Toast: React.FC<ToastProps> & WithStyle;
export default Toast;
