import styled, { css } from 'styled-components';
import { defaultTheme } from '../../theme';
import { ToastProps } from './types';

const getPosition = (position: ToastProps['position']) => {
    switch (position) {
        case 'top-left':
            return css`
                top: 0;
                left: 0;
            `;
        case 'top-center':
            return css`
                top: 0;
                left: 50%;
                transform: translateX(-50%);
            `;
        case 'top-right':
            return css`
                top: 0;
                right: 0;
            `;
        case 'right-center':
            return css`
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            `;
        case 'left-center':
            return css`
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            `;
        case 'bottom-left':
            return css`
                bottom: 0;
                left: 0;
            `;
        case 'bottom-center':
            return css`
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            `;
        case 'bottom-right':
            return css`
                bottom: 0;
                right: 0;
            `;
    }
};

const getFlexPosition = (position: ToastProps['position']) => {
    switch (position) {
        case 'top-left':
            return css`
                align-items: flex-start;
            `;
        case 'top-center':
            return css`
                align-items:center;
            `;
        case 'top-right':
            return css`
                align-items:flex-end;
            `;
    }
};

const getBorder = (borderPosition: ToastProps['borderPosition']) => {
    switch (borderPosition) {
        case 'top':
            return css`
                border-bottom:none;
                border-left:none;
                border-right:none;
            `;
        case 'left':
            return css`
                border-bottom:none;
                border-top:none;
                border-right:none;
            `;
        case 'right':
            return css`
                border-bottom:none;
                border-left:none;
                border-top:none;
            `;
        case 'bottom':
            return css`
                border-top:none;
                border-left:none;
                border-right:none;
            `;
    }
};

export const ToastContainer = styled('div')<ToastProps>`
	position: ${pr=> pr.fixed?'fixed':'relative'};
    display: flex;
    /* align-items: flex-end; */
	flex-direction: column;
	height: auto;
	width: auto;
	z-index: 999;
    ${({ position ,theme, fixed }) => (position && fixed ? getPosition(position): theme.toast.defaults.position)}
    ${({ position , fixed }) => (position && fixed!==true? getFlexPosition(position):'')}
`
ToastContainer.defaultProps = {
    theme:defaultTheme
}
export const Toast = styled('div')<ToastProps>`
    cursor: pointer;
	display: flex;
    flex-direction: column;
    position: relative;
	width: fit-content;
    height: auto;
    padding: 12px;
    margin: 10px;
	min-width: 250px;
    background-color:${({ theme, variant='' }) => (theme.toast.statusColor[variant].bgColor)};
    border-radius: 3px;
    -webkit-box-shadow: 0 0 10px${({ theme, shadowColor }) => (shadowColor ? shadowColor : theme.toast.defaults.shadowColor)};
	-moz-box-shadow: 0 0 10px ${({ theme, shadowColor }) => (shadowColor ? shadowColor : theme.toast.defaults.shadowColor)};
	box-shadow: 0 0 10px ${({ theme, shadowColor }) => (shadowColor ? shadowColor : theme.toast.defaults.shadowColor)};
	-webkit-transition: opacity 1s ease 0.5s;
	-moz-transition: opacity 1s ease 0.5s;
	transition: opacity 1s ease 0.5s;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
    border: solid 4px ${({ theme, variant='', borderColor }) => (borderColor ? borderColor : theme.toast.statusColor[variant].color)};
    ${({ borderPosition }) => (getBorder(borderPosition))}
`;
export const ToastHeader = styled('div')<ToastProps>`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid ${({ theme, variant='', borderColor }) => (borderColor ? borderColor : theme.toast.statusColor[variant].borderColor)};
    border-top-left-radius: calc(3px - 1px);
    border-top-right-radius: calc(3px - 1px);
`;
export const ToastBody = styled('div')`
    position: relative;
    flex: 1 1 auto;
    padding: 0.5rem;
`;


Toast.displayName = "Toast"
Toast.defaultProps = {
    theme:defaultTheme
}
ToastHeader.defaultProps = {
    theme: defaultTheme
};

