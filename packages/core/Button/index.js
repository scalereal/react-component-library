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
import React, { memo } from 'react';
import Text from '../Text/Text';
import { StyledButton } from './styled';
var Button = memo(React.forwardRef(function (props, ref) {
    var _a = props.type, type = _a === void 0 ? 'primary' : _a, _b = props.size, size = _b === void 0 ? 'S' : _b, textSize = props.textSize, textColor = props.textColor, hoverTextColor = props.hoverTextColor;
    return React.createElement(StyledButton, __assign({ ref: ref, type: type, size: size }, props),
        React.createElement(Text, { textSize: textSize, textColor: textColor, hoverColor: hoverTextColor }, props.children));
}));
Button.displayName = "Button";
Button.defaultProps = {
    hoverEffect: true
};
export default Button;
