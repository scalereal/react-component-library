import { WithStyle } from '../../utils/Styled/WithStyle';
import React, { FC } from 'react';
import CircleLoaderSvg from '../assets/CircleLoader.svg';
import SvgLoader, { SvgLoaderProps } from '../SvgLoader';

const CircleLoader: FC<SvgLoaderProps> & WithStyle = React.memo(props => (
    <SvgLoader {...props}>
        <CircleLoaderSvg  width="1em" height="1em" {...props} />
    </SvgLoader>
));

CircleLoader.Style = SvgLoader;
CircleLoader.displayName = 'CircleLoader';

export default CircleLoader
