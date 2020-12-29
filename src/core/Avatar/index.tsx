import React from 'react';
import { WithStyle } from '../../utils';
import { StyledAvatar } from './styled';
import { Props } from './types';

export type Ref = HTMLDivElement;

const Avatar:React.FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size='S',res='Pradip Bhusnar'} = props;

    const isValidURL = (res:string) => {
        const reso = res.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g);
        return (reso !== null)
    };
      
    const chars =(name:string)=>{
        const nameSplit = String(name).toUpperCase().split(' ');
        if (nameSplit.length == 1) return nameSplit[0].charAt(0);
        return nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    }
    

    return (
        <StyledAvatar ref={ref} size={size} {...props}>
            {isValidURL(res)?<img src={res} />:<span>{chars(res)}</span>}
        </StyledAvatar>
    );

}));

Avatar.displayName="Avatar";
Avatar.defaultProps = {
    hoverEffect: true
};

export default Avatar;
