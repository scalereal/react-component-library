var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
export var Wrapper = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    &&& {\n        flex-direction: row;\n        align-items: center;\n    }\n    background-clip: padding-box;\n    box-sizing: border-box;\n    border: 1px solid ", ";\n    border-radius: 5px;\n    overflow: hidden;\n    width: ", ";\n    height: max-content;\n    font-family: ", ";\n    &:focus-within {\n        border-color: ", ";\n    }\n    & > * {\n        font-size: 1rem;\n        padding: 10px;\n        font-family: ", ";\n        color: ", ";\n    }\n"], ["\n    display: flex;\n    &&& {\n        flex-direction: row;\n        align-items: center;\n    }\n    background-clip: padding-box;\n    box-sizing: border-box;\n    border: 1px solid ", ";\n    border-radius: 5px;\n    overflow: hidden;\n    width: ", ";\n    height: max-content;\n    font-family: ", ";\n    &:focus-within {\n        border-color: ", ";\n    }\n    & > * {\n        font-size: 1rem;\n        padding: 10px;\n        font-family: ", ";\n        color: ", ";\n    }\n"])), function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return (borderColor ? borderColor : theme.input.inputBorderColor);
}, function (props) { return (props.fullWidth ? '100%' : 'max-content'); }, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
}, function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return (borderColor ? borderColor : theme.input.inputBorderColor);
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
}, function (_a) {
    var theme = _a.theme, textColor = _a.textColor;
    return (textColor ? textColor : theme.input.inputTextColor);
});
Wrapper.defaultProps = {
    theme: defaultTheme
};
export var Input = styled('input')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    flex: 1;\n    outline: 0;\n    border: 0;\n    cursor: ", ";\n    font-family: ", ";\n    background-color: ", ";\n    &::placeholder {\n        color: ", ";\n        font-family: ", ";\n    }\n    &::-webkit-file-upload-button {\n        visibility: hidden;\n    }\n"], ["\n    flex: 1;\n    outline: 0;\n    border: 0;\n    cursor: ", ";\n    font-family: ", ";\n    background-color: ",
    ";\n    &::placeholder {\n        color: ", ";\n        font-family: ", ";\n    }\n    &::-webkit-file-upload-button {\n        visibility: hidden;\n    }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'inherit');
}, function (_a) {
    var theme = _a.theme;
    return (theme.fontFamily);
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme, disabledColor = _a.disabledColor, backgroundColor = _a.backgroundColor;
    return disabled
        ? disabledColor
            ? disabledColor
            : theme.input.inputDisabledColor
        : backgroundColor
            ? backgroundColor
            : theme.input.inputBackgroundColor;
}, function (_a) {
    var theme = _a.theme, placeHolderColor = _a.placeHolderColor;
    return placeHolderColor ? placeHolderColor : theme.input.inputPlaceHolderColor;
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
});
Input.defaultProps = {
    theme: defaultTheme
};
export var Prefix = styled('span')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background-color: ", ";\n\n    font-family: ", ";\n"], ["\n    background-color: ",
    ";\n\n    font-family: ", ";\n"])), function (_a) {
    var theme = _a.theme, preffixBackgroundColor = _a.preffixBackgroundColor;
    return preffixBackgroundColor ? preffixBackgroundColor : theme.input.inputPreffixBackgroundColor;
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
});
Prefix.defaultProps = {
    theme: defaultTheme
};
export var Suffix = styled('span')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    background-color: ", ";\n    \n    font-family: ", ";\n"], ["\n    background-color: ",
    ";\n    \n    font-family: ", ";\n"])), function (_a) {
    var theme = _a.theme, suffixBackgroundColor = _a.suffixBackgroundColor;
    return suffixBackgroundColor ? suffixBackgroundColor : theme.input.inputSuffixBackgroundColor;
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
});
Suffix.defaultProps = {
    theme: defaultTheme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
