import React, { FC } from 'react';
import { WithStyle } from '../../utils';
import { StyledLabel } from './styled';
import { Props } from './types';

const FileInput:FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {

    const [file, setFile] = React.useState("");

  const handleUpload = (event:any) =>{
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }
    return(
        <StyledLabel ref={ref} {...props}>
            <input type="file" aria-label="File browser example" onChange={(e:any) => handleUpload(e)} />
        </StyledLabel>
    )
}));

FileInput.displayName="FileInput";
FileInput.defaultProps = {
    hoverEffect: true,
    hasError:false,
    errorText:''
};

export default FileInput;