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
import React, { useCallback } from 'react';
import * as Styled from './Toggle.styled';
export var toggleSizes = ['XS', 'S', 'M', 'L', 'XL'];
export var Toggle = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size, required = props.required, onChange = props.onChange, restProps = __rest(props, ["size", "required", "onChange"]);
    var changeHandler = useCallback(function (e) {
        e.stopPropagation();
        onChange && onChange(e);
    }, [onChange]);
    return (React.createElement(Styled.ToggleWrapper, { size: size, disabled: restProps.disabled },
        React.createElement(Styled.Checkbox, __assign({ ref: ref, size: size, required: required, onChange: changeHandler }, restProps)),
        React.createElement(Styled.Circle, { size: size })));
}));
Toggle.displayName = 'Toggle';
Toggle.Style = Styled.ToggleWrapper;
Toggle.defaultProps = {
    required: false,
};
export default Toggle;
