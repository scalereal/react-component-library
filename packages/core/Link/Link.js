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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import Text from '../Text/Text';
import * as Styled from './Link.styled';
var Link = React.memo(React.forwardRef(function (_a, ref) {
    var href = _a.href, linkSize = _a.linkSize, linkColor = _a.linkColor, hoverColor = _a.hoverColor, activeColor = _a.activeColor, props = __rest(_a, ["href", "linkSize", "linkColor", "hoverColor", "activeColor"]);
    var isValidStringOrNumber = function (e) { return typeof e === 'string' || typeof e === 'number'; };
    return (React.createElement(Styled.LinkStyled, __assign({ href: href, ref: ref, linkSize: linkSize, linkColor: linkColor, hoverColor: hoverColor, activeColor: activeColor }, props), React.Children.map(props.children, function (c) {
        return isValidStringOrNumber(c) ? React.createElement(Text, { textSize: linkSize, textColor: linkColor, hoverColor: hoverColor, activeColor: activeColor }, c) : c;
    })));
}));
Link.displayName = 'Link';
Link.Style = Styled.LinkStyled;
Link.defaultProps = {
    linkSize: 'S'
};
export default Link;
