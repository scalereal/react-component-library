import * as React from 'react'
import { WithStyle } from '../../utils'
import * as Styled from './Label.styled'
import { LabelProps } from './types'

export const labelSizes : LabelProps['labelSize'][]  = ['XS', 'S', 'M', 'L', 'XL']
export const labelWeights : LabelProps['labelWeight'][] = ['light', 'regular', 'medium', 'strong', 'extraStrong']

export const Label: React.FC<LabelProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => (
        <Styled.Label ref={ref} {...props}>
            {props.children}
        </Styled.Label>
    ))
);

Label.defaultProps = {
    required: false
};
Label.displayName = 'Label';
Label.Style = Styled.Label;

export default Label