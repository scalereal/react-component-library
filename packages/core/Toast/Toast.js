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
import * as Styled from "./Toast.styled";
var Toast = React.memo(React.forwardRef(function (props, ref) {
    var variant = props.variant, title = props.title, message = props.message, titleColor = props.titleColor, messageColor = props.messageColor, restProps = __rest(props, ["variant", "title", "message", "titleColor", "messageColor"]);
    return (React.createElement(Styled.Toast, __assign({ ref: ref, variant: variant }, restProps),
        React.createElement(Styled.ToastHeader, __assign({}, props),
            React.createElement(Text, { textSize: "S", lineHeight: "1.5", textColor: titleColor }, title)),
        React.createElement(Styled.ToastBody, null,
            React.createElement(Text, { textSize: "XS", textColor: messageColor }, message)),
        React.createElement(Styled.ToastFooter, __assign({}, props)),
        React.createElement(Styled.ToastCloseIcon, null, "X")));
}));
Toast.displayName = 'Toast';
Toast.Style = Styled.Toast;
export default Toast;
