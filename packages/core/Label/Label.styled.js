var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import styled, { css } from 'styled-components';
import { defaultTheme } from '../../theme';
var asterisk = function () { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ::after {\n        color: red;\n        content: ' *';\n    }\n"], ["\n    ::after {\n        color: red;\n        content: ' *';\n    }\n"]))); };
var uppercase = function () { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    text-transform: uppercase;\n"], ["\n    text-transform: uppercase;\n"]))); };
var getTextStyle = function (_a) {
    var props = __rest(_a, []);
    var labelColor = props.labelColor, lineHeight = props.lineHeight, _b = props.labelSize, labelSize = _b === void 0 ? "S" : _b, labelWeight = props.labelWeight;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        margin: 0;\n        color: ", ";\n        line-height: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n    "], ["\n        margin: 0;\n        color: ", ";\n        line-height: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n    "])), function (_a) {
        var theme = _a.theme;
        return (labelColor ? labelColor : theme.label.defaults.labelColor);
    }, function (_a) {
        var theme = _a.theme;
        return (lineHeight ? lineHeight : theme.label.defaults.lineHeight);
    }, function (_a) {
        var theme = _a.theme;
        return (theme.label.sizes[labelSize].fontSize);
    }, function (_a) {
        var theme = _a.theme;
        return (labelWeight ? theme.label.weights[labelWeight].weight : theme.label.defaults.labelWeight);
    }, function (_a) {
        var theme = _a.theme;
        return (theme.label.fontFamily);
    });
};
export var Label = styled('label')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n    ", "\n    ", ";\n    cursor: ", ";\n"], ["\n    ", "\n    ", "\n    ", ";\n    cursor: ", ";\n"])), getTextStyle, function (_a) {
    var required = _a.required;
    return required && asterisk();
}, function (props) { return props.uppercase && uppercase(); }, function (_a) {
    var showPointer = _a.showPointer;
    return (showPointer === undefined ? 'default' : showPointer ? 'pointer' : 'not-allowed');
});
Label.displayName = "Label";
Label.defaultProps = {
    theme: defaultTheme,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
