import * as React from 'react';
import { WithStyle } from '../../utils';
import { Props } from '../types';
import { Loader, LoaderWrapper } from './styled';

export const SizeMap: Props['size'][] = ['XXS','XS', 'S', 'M', 'L', 'XL'];

const Loader2:React.FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size} = props;

    return (
        <LoaderWrapper ref={ref} size={size} {...props}>
            <Loader {...props}/>
        </LoaderWrapper>
    );
    
}));

Loader2.displayName="Loader2";
Loader2.defaultProps = {
    size:'S',
    visible: true
};

export default Loader2;
