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
import React from 'react';
import * as Styled from './Label.styled';
var Label = React.memo(React.forwardRef(function (props, ref) { return (React.createElement(Styled.Label, __assign({ ref: ref }, props), props.children)); }));
Label.defaultProps = {
    required: false
};
Label.displayName = 'Label';
Label.Style = Styled.Label;
export default Label;
