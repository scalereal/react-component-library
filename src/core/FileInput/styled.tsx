import styled from 'styled-components';
import { defaultTheme } from "../../theme/theme";
import { Props } from './types';


export const StyledLabel = styled.label<Props>`
    display:block;
    color: ${defaultTheme.statusColors.danger}
`;

