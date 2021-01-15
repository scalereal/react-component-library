import * as React from 'react';
import { WithStyle } from '../../utils';
import { TextProps } from './types';
export declare const textSizes: TextProps['textSize'][];
export declare const textAlignments: TextProps['textAlign'][];
export declare const textWeights: TextProps['textWeight'][];
declare const Text: React.FC<TextProps> & WithStyle;
export default Text;
