import React from 'react';
import { WithStyle } from '../../utils';
import { Props } from '../types';
import { Loader, LoaderWrapper } from './styled';

const CircleLoader12:React.FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size} = props;

    return (
        <LoaderWrapper ref={ref} size={size} {...props}>
            <Loader {...props}/>
        </LoaderWrapper>
    );
    
}));

CircleLoader12.displayName="CircleLoader12";
CircleLoader12.defaultProps = {
    size:'S',
    display: true
};

export default CircleLoader12;
