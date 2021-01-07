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
import { StyledAvatar } from './styled';
export var SizeMap = ['XXS', 'XS', 'S', 'M', 'L', 'XL'];
export var DisplayMap = ['inline-block', 'block'];
var Avatar = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size, _a = props.res, res = _a === void 0 ? 'Pradip Bhusnar' : _a;
    var isValidURL = function (res) {
        var reso = res.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g);
        return (reso !== null);
    };
    var chars = function (name) {
        var nameSplit = String(name).toUpperCase().split(' ');
        if (nameSplit.length == 1)
            return nameSplit[0].charAt(0);
        return nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    };
    return (React.createElement(StyledAvatar, __assign({ ref: ref, size: size }, props), isValidURL(res) ? React.createElement("img", { src: res }) : React.createElement("span", null, chars(res))));
}));
Avatar.displayName = "Avatar";
Avatar.defaultProps = {
    size: 'S',
    hoverEffect: true
};
export default Avatar;
