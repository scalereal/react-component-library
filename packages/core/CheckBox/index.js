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
import React, { memo, useState } from 'react';
import Text from '../Text/Text';
import { CheckBoxWrapper, ErrorLabel, StyledLabel } from './styled';
// export type Ref = HTMLLabelElement;
var CheckBox = memo(React.forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? 'S' : _a, _b = props.label, label = _b === void 0 ? 'CheckBox' : _b, _c = props.value, value = _c === void 0 ? '' : _c, _d = props.errorText, errorText = _d === void 0 ? '' : _d, fontSize = props.fontSize, labelHoverEffect = props.labelHoverEffect, labelHoverColor = props.labelHoverColor, labelColor = props.labelColor, _e = props.checked, checked = _e === void 0 ? false : _e;
    var _f = useState(checked), check = _f[0], setCheck = _f[1];
    return (React.createElement(CheckBoxWrapper, __assign({ ref: ref }, props),
        React.createElement(ErrorLabel, { id: "error", htmlFor: "error" }, errorText),
        React.createElement(StyledLabel, __assign({ size: size }, props),
            React.createElement("input", { type: "checkbox", checked: checked ? checked : check, value: value === '' ? label : value, onChange: function () { return setCheck(!check); } }),
            React.createElement(Text, { textSize: fontSize, textColor: labelColor, hoverEffect: labelHoverEffect, hoverColor: labelHoverColor }, label))));
}));
CheckBox.displayName = "CheckBox";
CheckBox.defaultProps = {
    hoverEffect: false
};
export default CheckBox;
