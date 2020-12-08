import React, { FC } from 'react';
import * as Styled from "./Label.styled"
import { LabelProps } from './types';

const Label: FC<LabelProps> = ({ children, labelColor, showPointer, required }:React.PropsWithChildren<LabelProps>) =>{

    return (
        <Styled.Label labelColor={labelColor} showPointer={showPointer} required={required}>
            {children}
        </Styled.Label>
    )
}

export default Label