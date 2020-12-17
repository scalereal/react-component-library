import { WithStyle } from '../../utils/Styled/WithStyle';
import React, { FC } from 'react';
import DotsLoaderSvg from '../assets/DotsLoader.svg';
import SvgLoader, { SvgLoaderProps } from '../SvgLoader';

export const DotsLoader: FC<SvgLoaderProps> & WithStyle = React.memo(props => (
    <SvgLoader {...props}>
        <DotsLoaderSvg  width="1em" height="0.5em" {...props} />
    </SvgLoader>
));

DotsLoader.Style = SvgLoader;
DotsLoader.displayName = 'DotsLoader';
