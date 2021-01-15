import * as React from 'react';
import { WithStyle } from '../../utils';
import { Props } from '../types';
import { Loader, LoaderWrapper, StyledWrapper } from './styled';

export const SizeMap: Props['size'][] = ['S', 'M', 'L', 'XL'];

const Loader20:React.FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size} = props;

    return (
        <LoaderWrapper ref={ref} size={size} {...props}>
            <StyledWrapper {...props}>
                <Loader {...props}>
                    <div className="multi-spinner">
                        <div className="multi-spinner">
                            <div className="multi-spinner">
                                <div className="multi-spinner">
                                    <div className="multi-spinner">
                                        <div className="multi-spinner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Loader>
            </StyledWrapper>
        </LoaderWrapper>
    );
    
}));

Loader20.displayName="Loader20";
Loader20.defaultProps = {
    size:'S',
    visible: true
};

export default Loader20;
