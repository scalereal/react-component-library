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
import Text from '../Text/Text';
import { ErrorLabel, RadioSpan, RadioWrapper, StyledLabel } from './styled';
// export type Ref = HTMLLabelElement;
var Radio = React.memo(React.forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? 'S' : _a, _b = props.label, label = _b === void 0 ? 'CheckBox' : _b, _c = props.errorText, errorText = _c === void 0 ? '' : _c, value = props.value, checked = props.checked, labelColor = props.labelColor, labelHoverEffect = props.labelHoverEffect, hoverLabelColor = props.hoverLabelColor;
    var _d = useState(checked), select = _d[0], setSelect = _d[1];
    return (React.createElement(RadioWrapper, null,
        React.createElement(ErrorLabel, { id: "error", htmlFor: "error" }, errorText),
        React.createElement(StyledLabel, __assign({ ref: ref, size: size, onChange: function () { return setSelect(!select); } }, props),
            React.createElement(Text, { className: 'radioLabel', hoverEffect: labelHoverEffect, hoverColor: hoverLabelColor, textSize: size, textColor: labelColor }, label),
            React.createElement("input", { type: "radio", value: value === '' ? label : value, checked: checked || select }),
            React.createElement(RadioSpan, __assign({}, props)))));
}));
Radio.displayName = "CheckBox";
Radio.defaultProps = {
    hoverEffect: true,
    hasError: false,
    errorText: ''
};
export default Radio;
