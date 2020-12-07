import styled from 'styled-components';
import { Props } from './types';


export const StyledAvatar = styled.div<Props>`
    width: 150px;
    height: 150px;
    line-height: 150px;
    border-radius: 50%;
    text-align:center;
    background-color: ${pr => pr.bgColor || `blue` };

    ${pr => pr.hoverEffect? `&:hover {
        background-color: ${pr.hoverBgColor};
        span{
            color: ${pr.hoverTextColor};
            text-shadow: 0px 5px 8px ${pr.hoverTextShadowColor };
        }
        img{
            box-shadow: 0px 5px 8px ${pr.hoverImageShadowColor };
        }
        }
        `:
        ''
    }

    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    
    span{
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        font-size:5em;
        color: ${pr => pr.textColor };
    }
`;