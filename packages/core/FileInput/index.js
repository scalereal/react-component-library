var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from 'react';
import { ErrorLabel } from '../CheckBox/styled';
import { BrowsSpan, FileNameSpan, StyledInput, StyledLabel, StyledWrapper } from './styled';
export var SizeMap = ['XS', 'S', 'M', 'L', 'XL'];
var FileInput = React.memo(React.forwardRef(function (props, ref) {
    var _a = useState(''), file = _a[0], setFile = _a[1];
    var errorText = props.errorText, _b = props.size, size = _b === void 0 ? 'S' : _b;
    var handleUpload = function (e) {
        setFile(e.target.files[0].name);
        console.log(file);
    };
    return (React.createElement(StyledWrapper, __assign({ ref: ref }, props),
        React.createElement(ErrorLabel, __assign({}, props), errorText),
        React.createElement(StyledLabel, __assign({}, props),
            React.createElement(BrowsSpan, __assign({ size: size }, props), "Browse"),
            React.createElement(FileNameSpan, __assign({ size: size }, props), file === '' ? 'Chose file' : file),
            React.createElement(StyledInput, { type: "file", onChange: handleUpload }))));
}));
FileInput.displayName = "FileInput";
FileInput.defaultProps = {
    hoverEffect: true,
    hasError: false,
    errorText: ''
};
export default FileInput;
