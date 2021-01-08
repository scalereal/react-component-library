var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
export var OuterWrapper = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    .error{\n        color:", ";\n        font-family: ", ";\n    }\n"], ["\n    .error{\n        color:", ";\n        font-family: ", ";\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.input.inputErrorColor);
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
});
OuterWrapper.defaultProps = {
    theme: defaultTheme
};
export var Error = styled('span')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 0.9rem;\n    line-height: 1rem;\n    white-space: initial;\n    user-select: none;\n    margin: 0.1rem 0.8rem;\n    color:", ";\n    font-family: ", ";\n"], ["\n    font-size: 0.9rem;\n    line-height: 1rem;\n    white-space: initial;\n    user-select: none;\n    margin: 0.1rem 0.8rem;\n    color:", ";\n    font-family: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.input.inputErrorColor);
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
});
Error.defaultProps = {
    theme: defaultTheme
};
export var InputWrapper = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    &&& {\n        flex-direction: row;\n        align-items: center;\n        justify-content:center;\n    }\n    background-clip: padding-box;\n    box-sizing: border-box;\n    border: 2px solid ", ";\n    border-radius: 3px;\n    overflow: hidden;\n    margin: 1%;\n    width: ", ";\n    height: max-content;\n    font-family: ", ";\n    &:focus-within {\n        border-color: ", ";\n    }\n    & > * {\n        font-size: 1rem;\n        padding: 10px;\n        font-family: ", ";\n        color: ", ";\n    }\n    \n"], ["\n    display: flex;\n    &&& {\n        flex-direction: row;\n        align-items: center;\n        justify-content:center;\n    }\n    background-clip: padding-box;\n    box-sizing: border-box;\n    border: 2px solid ", ";\n    border-radius: 3px;\n    overflow: hidden;\n    margin: 1%;\n    width: ", ";\n    height: max-content;\n    font-family: ", ";\n    &:focus-within {\n        border-color: ", ";\n    }\n    & > * {\n        font-size: 1rem;\n        padding: 10px;\n        font-family: ", ";\n        color: ", ";\n    }\n    \n"])), function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor, hasError = _a.hasError;
    return (borderColor ? hasError ? theme.input.inputErrorColor : borderColor : hasError ? theme.input.inputErrorColor : theme.input.inputBorderColor);
}, function (props) { return (props.fullWidth ? '98%' : 'max-content'); }, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
}, function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor, hasError = _a.hasError;
    return (borderColor ? hasError ? theme.input.inputErrorColor : borderColor : hasError ? theme.input.inputErrorColor : theme.input.inputFocusBorderColor);
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
}, function (_a) {
    var theme = _a.theme, textColor = _a.textColor;
    return (textColor ? textColor : theme.input.inputTextColor);
});
InputWrapper.defaultProps = {
    theme: defaultTheme
};
export var Input = styled('input')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    flex: 1;\n    outline: 0;\n    border: 0;\n    cursor: ", ";\n    font-family: ", ";\n    background-color: ", ";\n    &::placeholder {\n        color: ", ";\n        font-family: ", ";\n    }\n"], ["\n    flex: 1;\n    outline: 0;\n    border: 0;\n    cursor: ", ";\n    font-family: ", ";\n    background-color: ",
    ";\n    &::placeholder {\n        color: ", ";\n        font-family: ", ";\n    }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'inherit');
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
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
export var Preffix = styled('span')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    background-color: ", ";\n    font-family: ", ";\n    color:", ";\n"], ["\n    background-color: ", ";\n    font-family: ", ";\n    color:", ";\n"])), function (_a) {
    var theme = _a.theme, preffixBackgroundColor = _a.preffixBackgroundColor;
    return (preffixBackgroundColor ? preffixBackgroundColor : theme.input.inputPreffixBackgroundColor);
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
}, function (_a) {
    var theme = _a.theme, preffixColor = _a.preffixColor, hasError = _a.hasError;
    return (preffixColor ? hasError ? theme.input.inputErrorColor : preffixColor : hasError ? theme.input.inputErrorColor : theme.input.inputPreffixColor);
});
Preffix.defaultProps = {
    theme: defaultTheme
};
export var Suffix = styled('span')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    background-color: ", ";\n    font-family: ", ";\n    color:", ";\n"], ["\n    background-color: ", ";\n    font-family: ", ";\n    color:", ";\n"])), function (_a) {
    var theme = _a.theme, suffixBackgroundColor = _a.suffixBackgroundColor;
    return (suffixBackgroundColor ? suffixBackgroundColor : theme.input.inputSuffixBackgroundColor);
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
}, function (_a) {
    var theme = _a.theme, suffixColor = _a.suffixColor, hasError = _a.hasError;
    return (suffixColor ? hasError ? theme.input.inputErrorColor : suffixColor : hasError ? theme.input.inputErrorColor : theme.input.inputSuffixColor);
});
Suffix.defaultProps = {
    theme: defaultTheme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
