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
var uppercase = function () { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    text-transform: uppercase;\n"], ["\n    text-transform: uppercase;\n"]))); };
var lineThrough = function () { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    text-decoration: line-through;\n"], ["\n    text-decoration: line-through;\n"]))); };
var getTextStyle = function (_a) {
    var props = __rest(_a, []);
    var textColor = props.textColor, lineHeight = props.lineHeight, textSize = props.textSize, textAlign = props.textAlign, textWeight = props.textWeight;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        margin: 0;\n        color: ", ";\n        line-height: ", ";\n        font-size: ", ";\n        text-align: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n    "], ["\n        margin: 0;\n        color: ", ";\n        line-height: ", ";\n        font-size: ", ";\n        text-align: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n    "])), function (_a) {
        var theme = _a.theme;
        return (textColor ? textColor : theme.text.defaults.textColor);
    }, function (_a) {
        var theme = _a.theme;
        return (lineHeight ? lineHeight : theme.text.defaults.lineHeight);
    }, function (_a) {
        var theme = _a.theme;
        return (textSize === undefined ? theme.text.defaults.size : theme.text.sizes[textSize].fontSize);
    }, function (_a) {
        var theme = _a.theme;
        return (textAlign ? textAlign : theme.text.defaults.textAlign);
    }, function (_a) {
        var theme = _a.theme;
        return (textWeight ? theme.text.weights[textWeight].weight : theme.text.defaults.textWeight);
    }, function (_a) {
        var theme = _a.theme;
        return (theme.text.fontFamily);
    });
};
export var Text = styled('span')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding:0.3rem;\n    ", "\n    ", ";\n    ", ";\n    &:active {\n        color: ", ";\n    }\n    ", ";\n    /* &:hover {\n        color: ", ";\n    } */\n\n"], ["\n    padding:0.3rem;\n    ", "\n    ", ";\n    ", ";\n    &:active {\n        color: ", ";\n    }\n    ",
    ";\n    /* &:hover {\n        color: ", ";\n    } */\n\n"])), getTextStyle, function (props) { return props.uppercase && uppercase(); }, function (props) { return props.lineThrough && lineThrough(); }, function (_a) {
    var theme = _a.theme, activeColor = _a.activeColor;
    return (activeColor ? activeColor : theme.text.defaults.activeColor);
}, function (props) { return props.hoverEffect ? "&:hover {\n        color: " + (props.hoverColor ? props.hoverColor : props.theme.text.defaults.hoverColor) + ";\n    }" : ''; }, function (_a) {
    var theme = _a.theme, hoverColor = _a.hoverColor;
    return (hoverColor ? hoverColor : theme.text.defaults.hoverColor);
});
Text.displayName = "Text";
Text.defaultProps = {
    theme: defaultTheme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
