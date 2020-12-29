import styled from 'styled-components';
import { cardTableTheme } from '../../theme/core/cardTable';
import { tableTheme } from '../../theme/core/table';
import { Props } from './types';

export const StyledThead = styled.thead`

`;

export const StyledTh = styled.th<Props>`
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${pr => pr.thBgColor || tableTheme.defaults.thBgColor};
    color: ${pr => pr.thTextColor || tableTheme.defaults.thTextColor};
`;

export const StyledTr = styled.tr<Props>`
    &:nth-child(even){background-color: ${pr => pr.nthTrBgColor || tableTheme.defaults.nthTrBgColor };};
    /* &:hover {background-color:#ddd;} */
    ${pr => pr.hoverEffect?`&:hover {background-color:${pr.hoverTrBgColor || tableTheme.defaults.hoverTrBgColor};`:''}
`;

export const StyledTbody = styled.tbody`

`;

export const StyledTd = styled.td`

`;

export const StyledTable = styled.table<Props>`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 90%;
    margin:auto;
    ${StyledTd},${StyledTh}{
        border: 1px solid ${pr => pr.borderColor || cardTableTheme.defaults.borderColor};
        padding: 8px;
    }
`;