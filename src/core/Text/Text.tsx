import React, { FC } from 'react';
import * as Styled from "./Text.styled"
import { TextProps,WithStyle } from './types';

const Text: FC<TextProps> & WithStyle = React.memo(
    React.forwardRef(({ children ,textSize, ...restProps }, ref) => {
        return (
            <Styled.Text {...restProps } textSize={textSize}  ref={ref}>
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
