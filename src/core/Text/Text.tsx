import React, { FC } from 'react'
import { WithStyle } from '../../utils'
import * as Styled from './Text.styled'
import { TextProps } from './types'

export const textSizes : TextProps['textSize'][] = ['XS', 'S', 'M', 'L', 'XL']
export const textAlignments : TextProps['textAlign'][] = ['left', 'right', 'center', 'justify', 'justify-all', 'start', 'end', 'match-parent', 'inherit', 'initial', 'unset']
export const textWeights : TextProps['textWeight'][] = ['light', 'regular', 'medium', 'strong', 'extraStrong']

const Text: FC<TextProps> & WithStyle = React.memo(
    React.forwardRef(({ children, textSize, textWeight, textAlign, ...restProps }, ref) => {
        return (
            <Styled.Text  textSize={textSize} textWeight={textWeight} textAlign={textAlign} ref={ref} {...restProps }>
                {children}
            </Styled.Text>
        );
    })
);

Text.defaultProps = {
    lineThrough: false,
    uppercase: false,
    textSize:'S'
};
Text.displayName = 'Text';
Text.Style = Styled.Text;

export default Text;
