import React from 'react';
import { WithStyle } from '../../utils';
import { Props } from '../types';
import { Loader, LoaderWrapper } from './styled';

export const SizeMap: Props['size'][] = ['XXS','XS', 'S', 'M', 'L', 'XL'];

const CircleLoader3:React.FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size} = props;

    return (
        <LoaderWrapper ref={ref} size={size} {...props}>
            <Loader {...props}/>
        </LoaderWrapper>
    );
    
}));

CircleLoader3.displayName="CircleLoader3";
CircleLoader3.defaultProps = {
    size:'S',
    display: true
};

export default CircleLoader3;
