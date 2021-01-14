var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
var getHeight = function (_a) {
    var _b;
    var theme = _a.theme, _c = _a.size, size = _c === void 0 ? 'S' : _c;
    return ((_b = theme === null || theme === void 0 ? void 0 : theme.toggle) === null || _b === void 0 ? void 0 : _b.sizes[size]);
};
var getWidth = function (props) { return "calc(" + getHeight(props) + " * 2)"; };
export var ToggleWrapper = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    width: ", ";\n    height: ", ";\n    border-radius: 15px;\n    &:focus-within {\n        box-shadow: 0 0 0 1pt ", ";\n    }\n    & > * {\n        width: 100%;\n        height: 100%;\n        border-radius: 15px;\n    }\n"], ["\n    position: relative;\n    width: ", ";\n    height: ", ";\n    border-radius: 15px;\n    &:focus-within {\n        box-shadow: 0 0 0 1pt ", ";\n    }\n    & > * {\n        width: 100%;\n        height: 100%;\n        border-radius: 15px;\n    }\n"])), getWidth, getHeight, function (_a) {
    var theme = _a.theme;
    return (theme.toggle.borderColor);
});
ToggleWrapper.defaultProps = {
    theme: defaultTheme
};
export var Circle = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    z-index: 1;\n    position: absolute;\n    background-color: ", ";\n    &::after {\n        content: '';\n        margin: 3px;\n        display: block;\n        border-radius: 50%;\n        background: ", ";\n        transition: 0.2s;\n        width: ", ";\n        height: ", ";\n    }\n"], ["\n    z-index: 1;\n    position: absolute;\n    background-color: ", ";\n    &::after {\n        content: '';\n        margin: 3px;\n        display: block;\n        border-radius: 50%;\n        background: ", ";\n        transition: 0.2s;\n        width: ", ";\n        height: ", ";\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.backgroundColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.toggle.borderColor;
}, function (props) { return "calc(" + getHeight(props) + " - 6px) "; }, function (props) { return "calc(" + getHeight(props) + " - 6px) "; });
Circle.defaultProps = {
    theme: defaultTheme
};
export var Checkbox = styled('input').attrs({ type: 'checkbox' })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    opacity: 0;\n    z-index: 2;\n    margin: 0;\n    position: absolute;\n    cursor: pointer;\n    &:focus {\n        outline: none;\n    }\n    &:disabled {\n        cursor: not-allowed;\n        & + ", " {\n            background: ", ";\n        }\n    }\n    &:checked + ", " {\n        background: ", ";\n        &::after {\n            margin-left: ", ";\n        }\n    }\n"], ["\n    opacity: 0;\n    z-index: 2;\n    margin: 0;\n    position: absolute;\n    cursor: pointer;\n    &:focus {\n        outline: none;\n    }\n    &:disabled {\n        cursor: not-allowed;\n        & + ", " {\n            background: ", ";\n        }\n    }\n    &:checked + ", " {\n        background: ", ";\n        &::after {\n            margin-left: ", ";\n        }\n    }\n"])), Circle, function (_a) {
    var theme = _a.theme;
    return theme.toggle.disabledBackgroundColor;
}, Circle, function (_a) {
    var theme = _a.theme;
    return theme.toggle.checkedBackgroundColor;
}, function (props) { return "calc(" + getWidth(props) + " - (" + getHeight(props) + ") + 3px) "; });
Checkbox.defaultProps = {
    theme: defaultTheme
};
var templateObject_1, templateObject_2, templateObject_3;