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
import { Loader, LoaderWrapper } from './styled';
export var SizeMap = ['XXS', 'XS', 'S', 'M', 'L', 'XL'];
var Loader4 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader, __assign({}, props))));
}));
Loader4.displayName = "Loader4";
Loader4.defaultProps = {
    size: 'S',
    display: true
};
export default Loader4;