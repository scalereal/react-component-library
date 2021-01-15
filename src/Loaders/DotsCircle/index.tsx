import * as React from 'react';
import { WithStyle } from '../../utils';
import { Props } from '../types';
import { Loader, LoaderWrapper } from './styled';

export const SizeMap: Props['size'][] = ['XXS','XS', 'S', 'M', 'L', 'XL'];

const DotsCircle:React.FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size} = props;

    return (
        <LoaderWrapper ref={ref} size={size} {...props}>
            <Loader {...props}/>
        </LoaderWrapper>
    );
    
}));

DotsCircle.displayName="DotsCircle";
DotsCircle.defaultProps = {
    size:'S',
    visible: true
};

export default DotsCircle;
