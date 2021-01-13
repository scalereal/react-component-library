import React from 'react';
import { WithStyle } from '../../utils';
import { Loader, LoaderWrapper, StyledWrapper } from './styled';
import { LoaderProps } from './types';

const Loader17:React.FC<LoaderProps> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size} = props;

    return (
        <LoaderWrapper ref={ref} size={size} {...props}>
            <StyledWrapper {...props}>
                <Loader {...props}/>
            </StyledWrapper>
        </LoaderWrapper>
    );
    
}));

Loader17.displayName="Loader17";
Loader17.defaultProps = {
    size:'S',
    display: true
};

export default Loader17;
