import styled from 'styled-components';
import { fileInputTheme } from '../../theme/core/fileInput';
import { textTheme } from '../../theme/core/text';
import { defaultTheme } from '../../theme/theme';
import { Props } from './types';



export const StyledInput = styled.input`
    position: absolute;
    left: 134px;
    top: -60px;
    cursor: pointer;
    opacity: 0;
    -moz-opacity: 0;
    filter: progid:DXImageTransform.Microsoft.Alpha(opacity = 0);
`;

export const FileNameSpan = styled.span<Props>`
    width:70%;
    margin: 1px 1px 1px 5px;
    font-size: ${pr=> pr.size && textTheme.sizes[pr.size].fontSize};
    color: ${pr=> pr.textColor || fileInputTheme.defaults.textColor};
    background:transparent;
    font-style: italic;
    padding: .3em .6em;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
`;

export const BrowsSpan = styled.span<Props>`
    width:30%;
    text-align:center;
    border: none;
    background: ${pr=> pr.btnBgColor || fileInputTheme.defaults.btnBgColor};
    color: ${pr=> pr.btnTextColor || fileInputTheme.defaults.btnTextColor};
    font-weight: bold;
    padding: .3em .6em;
    -webkit-text-decoration: none;
    font-size: ${pr=> pr.size && textTheme.sizes[pr.size].fontSize};
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
`;

export const StyledLabel = styled.label<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''};
    display:inline-flex;
    border: 1px solid ${pr=> pr.hasError || pr.errorText!==''?defaultTheme.dangerColor:pr.borderColor || fileInputTheme.defaults.borderColor};
    cursor: pointer;
    justify-content:flex-end;
    flex-direction:row-reverse;
    border-radius:5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    ${pr=> pr.hoverEffect?`&:hover{
        ${BrowsSpan}{
                border:1px solid ${pr.btnHoverBorderColor  || fileInputTheme.defaults.btnHoverBorderColor};
                background: ${pr.btnHoverBgColor || fileInputTheme.defaults.btnHoverBgColor};
            }
    }`:''};
`;

export const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:280px;
`;

