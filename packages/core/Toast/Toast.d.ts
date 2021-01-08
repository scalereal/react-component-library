import { FC } from 'react';
import { WithStyle } from '../../utils';
import { ToastProps } from './types';
export declare const variants: ToastProps['variant'][];
export declare const positions: ToastProps['position'][];
export declare const borderPositions: ToastProps['borderPosition'][];
declare const Toast: FC<ToastProps> & WithStyle;
export default Toast;
