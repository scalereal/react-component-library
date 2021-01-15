import * as React from 'react';
import { WithStyle } from '../../utils';
import { Loader, LoaderWrapper, StyledWrapper } from './styled';
import { LoaderProps } from './types';

const Loader16:React.FC<LoaderProps> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size} = props;

    return (
        <LoaderWrapper ref={ref} size={size} {...props}>
            <StyledWrapper {...props}>
                <Loader {...props}/>
            </StyledWrapper>
        </LoaderWrapper>
    );
    
}));

Loader16.displayName="Loader16";
Loader16.defaultProps = {
    size:'S',
    visible: true
};

export default Loader16;
