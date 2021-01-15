import * as React from 'react'
import { WithStyle } from '../../utils'
import Text from '../Text/Text'
import * as Styled from './Toast.styled'
import { ToastProps } from './types'

export const variants: ToastProps['variant'][] = ['danger', 'warning', 'success', 'info'];
export const positions: ToastProps['position'][] = ['top-left', 'top-center', 'top-right', 'right-center', 'left-center', 'bottom-left', 'bottom-center', 'bottom-right'];
export const borderPositions: ToastProps['borderPosition'][] = ['top','bottom','left','right']

const Toast:React.FC<ToastProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { variant, title, message, titleColor, messageColor, ...restProps } = props;
        const color = variant === 'success' ? '#008000' : variant === 'info' ? '#126AFA' : variant === 'danger' ? '#cc0000' : variant === 'warning'? '#ffa726' : '';
        return (
            <Styled.ToastContainer ref={ref} variant={variant} {...restProps}>
                <Styled.Toast variant={variant} {...restProps}>
                <Styled.ToastHeader {...props}>
                    <Text textSize="S" textColor={titleColor ? titleColor : color}>
                        {title}
                    </Text>
                </Styled.ToastHeader>
                <Styled.ToastBody>
                    <Text textSize="XS" textColor={messageColor ? messageColor : color}>
                        {message}
                    </Text>
                </Styled.ToastBody>
            </Styled.Toast>
            </Styled.ToastContainer>
        );
    })
);
Toast.displayName = 'Toast';
Toast.Style = Styled.ToastContainer;
Toast.defaultProps={
    variant:'success',
    fixed:false,
    borderPosition:'top'
}

export default Toast
