import { WithStyle } from '../../utils/Styled/WithStyle';
import React, { FC } from 'react';
import ConcentricCircleLoaderSvg from '../assets/ConcentricCircleLoader.svg';
import SvgLoader, { SvgLoaderProps } from '../SvgLoader';

export const ConcentricCircleLoader: FC<SvgLoaderProps> & WithStyle = React.memo(props => (
    <SvgLoader {...props}>
        <ConcentricCircleLoaderSvg  width="1em" height="1em" {...props} />
    </SvgLoader>
));

ConcentricCircleLoader.Style = SvgLoader;
ConcentricCircleLoader.displayName = 'ConcentricCircleLoader';
