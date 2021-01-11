import React from 'react';
import { WithStyle } from '../../utils';
import { Props } from '../types';
import { Loader, LoaderWrapper } from './styled';

const CircleLoader9:React.FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size} = props;

    return (
        <LoaderWrapper ref={ref} size={size} {...props}>
            <Loader {...props}/>
        </LoaderWrapper>
    );
    
}));

CircleLoader9.displayName="CircleLoader9";
CircleLoader9.defaultProps = {
    size:'S',
    display: true
};

export default CircleLoader9;
