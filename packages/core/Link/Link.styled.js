var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { defaultTheme } from '../../theme';
export var LinkStyled = styled('a')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    background-color: transparent;\n    text-decoration: none;\n    font-size: ", ";\n    font-family: ", ";\n\n    &:active {\n        color: ", ";\n    }\n\n    &:hover {\n        color: ", ";\n        text-decoration: underline;\n        outline-width: 0;\n        cursor: pointer;\n    }\n"], ["\n    color: ", ";\n    background-color: transparent;\n    text-decoration: none;\n    font-size: ", ";\n    font-family: ", ";\n\n    &:active {\n        color: ", ";\n    }\n\n    &:hover {\n        color: ", ";\n        text-decoration: underline;\n        outline-width: 0;\n        cursor: pointer;\n    }\n"])), function (_a) {
    var theme = _a.theme, linkColor = _a.linkColor;
    return (linkColor ? linkColor : theme.link.defaults.linkColor);
}, function (_a) {
    var theme = _a.theme, linkSize = _a.linkSize;
    return (theme.link.sizes[linkSize].fontSize);
}, function (_a) {
    var theme = _a.theme;
    return (theme.link.fontFamily);
}, function (_a) {
    var theme = _a.theme, activeColor = _a.activeColor;
    return (activeColor ? activeColor : theme.link.defaults.activeColor);
}, function (_a) {
    var theme = _a.theme, hoverColor = _a.hoverColor;
    return (hoverColor ? hoverColor : theme.link.defaults.hoverColor);
});
LinkStyled.defaultProps = {
    theme: defaultTheme
};
var templateObject_1;
