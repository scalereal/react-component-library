import React from 'react';
import { WithStyle } from '../../utils';
import { Loader, LoaderWrapper, StyledWrapper } from './styled';
import { LoaderProps } from './types';

const Loader18:React.FC<LoaderProps> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size} = props;

    return (
        <LoaderWrapper ref={ref} size={size} {...props}>
            <StyledWrapper {...props}>
                <Loader {...props}/>
            </StyledWrapper>
        </LoaderWrapper>
    );
    
}));

Loader18.displayName="Loader18";
Loader18.defaultProps = {
    size:'S',
    visible: true
};

export default Loader18;
