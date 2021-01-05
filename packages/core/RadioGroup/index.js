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
import Radio from '../Radio';
import Text from '../Text/Text';
import { ErrorLabel, RadioGroupWrapper, StyledLi, StyledUl, StyledWrapper } from './styled';
export var SizeMap = ['XS', 'S', 'M', 'L', 'XL'];
export var lposMap = ['top', 'bottom', 'left', 'right'];
export var DisplayMap = ['inline', 'block'];
var RadioGroup = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size, options = props.options, mainLabel = props.mainLabel, errorText = props.errorText, labelColor = props.labelColor, labelHoverEffect = props.labelHoverEffect, hoverLabelColor = props.hoverLabelColor, hoverEffect = props.hoverEffect, bgColor = props.bgColor, hoverCheckedBgColor = props.hoverCheckedBgColor, hoverBgColor = props.hoverBgColor, checkedBgColor = props.checkedBgColor, labelPosition = props.labelPosition;
    var _a = useState(''), select = _a[0], setSelect = _a[1];
    var handleChange = function (e) {
        setSelect(e.target.value);
    };
    return (React.createElement(StyledWrapper, __assign({ ref: ref }, props),
        React.createElement(ErrorLabel, null, errorText),
        React.createElement(RadioGroupWrapper, __assign({}, props),
            React.createElement(Text, { className: 'radioGroupLabel', textColor: labelColor, hoverColor: hoverLabelColor, hoverEffect: labelHoverEffect, textSize: size }, mainLabel),
            React.createElement(StyledUl, __assign({}, props), options && options.map(function (obj) {
                return (React.createElement(StyledLi, { key: obj.id },
                    React.createElement(Radio, { label: obj.label, value: obj.value, checked: select == obj.value, onChange: handleChange, size: size, labelHoverEffect: labelHoverEffect, labelColor: labelColor, hoverLabelColor: hoverLabelColor, hoverEffect: hoverEffect, bgColor: bgColor, hoverCheckedBgColor: hoverCheckedBgColor, hoverBgColor: hoverBgColor, checkedBgColor: checkedBgColor, labelPosition: labelPosition })));
            })))));
}));
RadioGroup.displayName = "RadioGroup";
RadioGroup.defaultProps = {
    hoverEffect: true,
    size: 'S'
};
export default RadioGroup;
