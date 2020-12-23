import styled from 'styled-components';
import { defaultTheme } from '../../theme/theme';
import { Props } from './types';

export const StyledThead = styled.thead`

`;

export const StyledTh = styled.th<Props>`
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${pr => pr.thBgColor || defaultTheme.primaryColor};
    color: ${pr => pr.thTextColor || defaultTheme.whiteColor};
`;

export const StyledTr = styled.tr<Props>`
    &:nth-child(even){background-color: #f2f2f2;};
    /* &:hover {background-color:#ddd;} */
    ${pr => pr.hoverEffect?`&:hover {background-color:${pr.hoverTrBgColor || '#ddd'};`:''}
`;

export const StyledTbody = styled.tbody`

`;

export const StyledTd = styled.td`

`;

export const StyledTable = styled.table<Props>`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    ${StyledTd},${StyledTh}{
        border: 1px solid ${pr => pr.borderColor || '#ddd'};
        padding: 8px;
    }
`;