import styled from 'styled-components';
import { cardTableTheme } from '../../theme/core/cardTable';
import { Props } from './types';


export const StyledTh = styled.th<Props>`
   padding: 0.5rem;
`;

export const StyledTr = styled.tr<Props>`
    display: flex;
    justify-content: space-between;
    /* align-content: start; */
    align-items: center;
    /* justify-items: left; */
    margin-bottom: 1rem;
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: transparentize( white,0.15 );
    border: 1px solid ${pr=>pr.borderColor || cardTableTheme.defaults.borderColor};
    border-radius: 5px;
`;

export const StyledThead = styled.thead<Props>`
    ${StyledTr}{
        background-color:${pr=> pr.headerBgColor || cardTableTheme.defaults.headerBgColor};
    }
`; 

export const StyledTbody = styled.tbody<Props>`
    ${StyledTr}{
        box-shadow: 0px 4px 4px rgba(0, 74, 215, 0.45);
        background-color:${pr=> pr.trBgColor || cardTableTheme.defaults.trBgColor};
        &:nth-child(even){background-color: ${pr=> pr.nthTrBgColor || cardTableTheme.defaults.nthTrBgColor};};
        ${pr => pr.hoverEffect?`&:hover {box-shadow: 0px 4px 19px ${pr.hoverShadowColor || cardTableTheme.defaults.hoverShadowColor};
                                border:2px solid ${pr.hoverBorderColor || cardTableTheme.defaults.hoverBorderColor};
                                background-color:${pr.hoverTrBgColor || cardTableTheme.defaults.hoverTrBgColor};}`:''
                }
    }
`;

export const StyledTd = styled.td`
    display: inline-block;
    padding: 0.5rem;
    text-align: left;
`;

export const StyledTable = styled.table<Props>`
    width:90%;
    margin:auto;
    ${StyledTd},${StyledTh}{
        ${pr=> pr.thData && `width:${100 / pr.thData?.length}%;`}
        text-align: left;
    }
`;