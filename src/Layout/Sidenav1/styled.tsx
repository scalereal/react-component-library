import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { Props } from './types';
 
export const StyledLogo = styled.div<Props>`
    grid-area: logo;
    height: 70px;
    text-align:center;
    margin:auto;
    img{
        vertical-align:middle;
        width:inherit;
        height:inherit;
    }
    hr{
        border: 1px solid ${pr=>pr.hrColor || pr.theme.sidebar.defaults.hrColor}rgb(221, 221, 221);
    }
`;

StyledLogo.defaultProps={
    theme: defaultTheme
}

export const StyledNav = styled.div<Props>`
    margin: 50px auto;
    display: flex;
    flex-direction: column;

    div{
        text-align:center;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        margin-bottom: 0.5rem;
        border: 1px solid silver;
        transition: 0.5s;
        &:hover {
            transform: scale(1.1);
        }
    } 
`;

export const Wrapper = styled.div`
	transition: margin 0.3s;
    .open,
    .close {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        border-radius: 1rem;
        font-size: 1.5rem;
        background: white;
        text-transform: uppercase;
        text-decoration: none;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        padding: 0.5rem 1rem;
        border: 1px solid silver;
        > svg {
            margin-right: 1rem;
        }
    }

`;

export const StyledContent = styled.div`
    width: 90%;
    margin:auto;
`;

export const StyledHeader = styled.div<Props>`
    padding: 1rem;
	box-sizing: border-box;
	background: ${pr=>pr.bgColor || pr.theme.sidebar.defaults.bgColor};
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 300px;
	transform: translatex(-100%);
	transition: transform 0.3s;
	box-shadow: 0 1px 8px 0 ${pr=>pr.shadowColor || pr.theme.sidebar.defaults.shadowColor};

	&:target {
		transform: translatex(0);

		& ~ ${Wrapper} {
			margin-left: 300px;

			& .open {
				display: none;
			}
		}
	}

	&:not(:target) ~ ${Wrapper} .close {
		display: none;
	}
`;

StyledHeader.defaultProps={
    theme: defaultTheme
}
