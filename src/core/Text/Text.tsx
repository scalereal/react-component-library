import React, { FC } from 'react';
import * as Styled from "./Text.styled"
import { TextProps } from './types';

const Text: FC<TextProps>= ({children, textColor , lineThrough, uppercase}:React.PropsWithChildren<TextProps>) =>{
        return (
            <Styled.Text textColor={textColor} lineThrough={lineThrough} uppercase={uppercase}>
                {children}
            </Styled.Text>
        );
}
export default Text;
