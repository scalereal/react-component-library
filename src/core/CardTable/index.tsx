import React, { FC } from 'react';
import { WithStyle } from '../../utils';
import { StyledTable, StyledTbody, StyledTd, StyledTh, StyledThead, StyledTr } from './styled';
import { Props } from './types';

const CardTable:FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {thData,tdData} = props;
    if(thData){
    console.log(100/thData?.length)
    }
    return (
            <StyledTable ref={ref} {...props}>
                <StyledThead {...props}>
                    <StyledTr {...props}>
                        {thData && thData.map(th=><StyledTh key={th.id} {...props}>{th.data}</StyledTh>)}
                    </StyledTr>
                </StyledThead>
                <StyledTbody {...props}>
                    {tdData && tdData.map(tr=><StyledTr key={tr.trId} {...props}> {tr.trData.map(td => <StyledTd key={td.tdId} {...props} >{td.tdData}</StyledTd>)} </StyledTr>)}
                </StyledTbody>
            </StyledTable> 
        )
}));

CardTable.displayName="CardTable";
CardTable.defaultProps = {
    // hoverEffect: false
};

export default CardTable;