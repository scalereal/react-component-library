import React, { FC } from 'react'
import * as Styled from './Text.styled'
import { TextProps } from './types'
import { WithStyle } from '../../utils'

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
