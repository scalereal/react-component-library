import React from 'react';
import { WithStyle } from '../../utils';
import { Props } from '../types';
import { Loader, LoaderWrapper } from './styled';

const CircleLoader10:React.FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size} = props;

    return (
        <LoaderWrapper ref={ref} size={size} {...props}>
            <Loader {...props}/>
        </LoaderWrapper>
    );
    
}));

CircleLoader10.displayName="CircleLoader10";
CircleLoader10.defaultProps = {
    size:'S',
    display: true
};

export default CircleLoader10;
