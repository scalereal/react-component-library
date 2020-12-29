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
import CheckBox from '../CheckBox';
import { CheckBoxWrapper, ErrorLabel } from '../CheckBox/styled';
import Text from '../Text/Text';
import { StyledLabel, StyledLi, StyledUl } from './styled';
var CheckBoxGroup = memo(React.forwardRef(function (props, ref) {
    var _a = props.display, display = _a === void 0 ? "block" : _a, checkBoxOptions = props.checkBoxOptions, errorText = props.errorText, size = props.size, fontSize = props.fontSize, labelColor = props.labelColor, labelHoverEffect = props.labelHoverEffect, labelHoverColor = props.labelHoverColor, label = props.label, _b = props.showSelectAll, showSelectAll = _b === void 0 ? false : _b, hoverEffect = props.hoverEffect, disabled = props.disabled, bgColor = props.bgColor, hoverBgColor = props.hoverBgColor, hoverShadowColor = props.hoverShadowColor, labelPosition = props.labelPosition;
    var _c = useState(false), selectAll = _c[0], setSelectAll = _c[1];
    return (React.createElement(CheckBoxWrapper, __assign({ ref: ref }, props),
        React.createElement(ErrorLabel, { id: "error", htmlFor: "error" }, errorText),
        React.createElement(StyledLabel, __assign({ size: size }, props),
            showSelectAll ? React.createElement("input", { type: "checkbox", checked: selectAll, onChange: function () { return setSelectAll(!selectAll); } }) : '',
            React.createElement(Text, { textSize: fontSize, textColor: labelColor, hoverEffect: labelHoverEffect, hoverColor: labelHoverColor }, label)),
        React.createElement(StyledUl, __assign({ display: display }, props), checkBoxOptions && checkBoxOptions.map(function (obj) {
            return (React.createElement(StyledLi, { key: obj.id },
                React.createElement(CheckBox, { key: obj.id, label: obj.label, value: obj.value, checked: obj.checked ? obj.checked : selectAll, size: size, fontSize: fontSize, labelColor: labelColor, hoverEffect: hoverEffect, labelHoverEffect: labelHoverEffect, labelHoverColor: labelHoverColor, disabled: obj.disabled ? obj.disabled : disabled, bgColor: bgColor, hoverBgColor: hoverBgColor, hoverShadowColor: hoverShadowColor, labelPosition: labelPosition })));
        }))));
}));
CheckBoxGroup.displayName = "CheckBoxGroup";
CheckBoxGroup.defaultProps = {
// hoverEffect: false
};
export default CheckBoxGroup;
