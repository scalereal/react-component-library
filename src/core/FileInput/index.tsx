import React, { FC, useState } from 'react';
import { WithStyle } from '../../utils';
import { ErrorLabel } from '../CheckBox/styled';
import { BrowsSpan, FileNameSpan, StyledInput, StyledLabel, StyledWrapper } from './styled';
import { Props } from './types';

export const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];


const FileInput:FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {

  const [file, setFile] = useState<any>('');

  const {errorText,size='S'} = props;
  const handleUpload = (e:any) =>{
    setFile(e.target.files[0].name);
    console.log(file)
  }
    return(
      <StyledWrapper ref={ref} {...props}>
        <ErrorLabel {...props}>{errorText}</ErrorLabel>
        <StyledLabel {...props}>
            <BrowsSpan size={size} {...props}>Browse</BrowsSpan>
            <FileNameSpan size={size}  {...props}>{file===''?'Chose file':file}</FileNameSpan>
            <StyledInput type="file"  onChange={handleUpload} />
        </StyledLabel>
      </StyledWrapper>
    )
}));

FileInput.displayName="FileInput";
FileInput.defaultProps = {
    hoverEffect: true,
    hasError:false,
    errorText:''
};

export default FileInput;