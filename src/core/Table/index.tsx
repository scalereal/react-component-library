import * as React from 'react';
import { WithStyle } from '../../utils';
import { StyledTable, StyledTbody, StyledTd, StyledTh, StyledThead, StyledTr } from './styled';
import { Props } from './types';

export const Table:React.FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {thData,tdData} = props;
    return <StyledTable ref={ref} {...props}>
                <StyledThead>
                    <StyledTr {...props}>
                        {thData && thData.map(th=><StyledTh key={th.id} {...props}>{th.data}</StyledTh>)}
                    </StyledTr>
                </StyledThead>
                <StyledTbody>
                    {tdData && tdData.map(tr=><StyledTr key={tr.trId} {...props}>{tr.trData.map(td => <StyledTd key={td.tdId} {...props} >{td.tdData}</StyledTd>)}</StyledTr>)}
                </StyledTbody>
            </StyledTable>
}));

Table.displayName="Table";
Table.defaultProps = {
    hoverEffect: true
};

export default Table