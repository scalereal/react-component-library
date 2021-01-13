import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { Props } from './types';
 
export const StyledLogo = styled.div`
    grid-area: logo;
    height: 70px;
    margin-left:30px;
    img{
        width:inherit;
        height:inherit;
    }
`;

export const StyledNav = styled.div<Props>`
    display: grid;
    grid-area: nav;
    margin-right:30px;
    grid-template-columns: repeat(${pr=>pr.navOptions?.length}, auto);
    align-items: center;
    justify-items: center;
    a{
        span{color: #fff;}
        color: #fff;
        transition: 0.5s;
        &:hover {
            transform: scale(1.1);
        }
    }
`;


export const NavButton = styled.button<Props>`
    color:#fff;
    display: none;
    grid-area: burger;
    margin-right:30px;
    padding: 0;
    justify-self: end;
    align-self: center;
    font-size: 40px;
    border: none;
    background: none;
    outline: none;
    transition: 0.1s;
    &:active {
        transform: scale(1.2);
    }
`;

export const StyledHeader = styled.div<Props>`
    position: fixed;
    top: 0; /* Stick it to the top */
    left:0;
    min-height: 50px;
    width: 100%;
    z-index:100000;
    display: grid;
    align-items:center;
    grid-template-areas: "logo nav";

    /* Cosmetics */
    background-color: ${pr=>pr.bgColor || pr.theme.navbar.defaults.bgColor};
    box-shadow: 0 4px 8px 0 ${pr=>pr.shadowColor || pr.theme.navbar.defaults.shadowColor};

    @media (max-width: 700px){
        grid-template-areas: "logo burger" "nav nav";
        ${StyledNav} {
            grid-template-rows: repeat(4, auto);
            grid-template-columns: none;
            grid-row-gap: 20px;
            margin: 0;
            padding: 30px 0 30px;
            background:${pr=>pr.popBgColor || pr.theme.navbar.defaults.popBgColor};
            box-shadow: 0 4px 8px 0 ${pr=>pr.popShadowColor || pr.theme.navbar.defaults.popShadowColor};
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        ${NavButton} {
            display: inline;
        }
    }
`;

StyledHeader.defaultProps={
    theme: defaultTheme
}