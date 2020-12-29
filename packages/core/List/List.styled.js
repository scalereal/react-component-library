var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { defaultTheme } from '../../theme';
var horizontal = function (spacings) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    li {\n        margin: 0 ", ";\n        &:last-child {\n            margin-right: ", ";\n        }\n        &:first-child {\n            margin-left: ", ";\n        }\n    }\n"], ["\n    li {\n        margin: 0 ", ";\n        &:last-child {\n            margin-right: ", ";\n        }\n        &:first-child {\n            margin-left: ", ";\n        }\n    }\n"])), spacings.S1, spacings.S2, spacings.S2); };
var vertical = function (spacings) { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    li {\n        margin: ", " 0;\n        &:last-child {\n            margin-bottom: ", ";\n        }\n        &:first-child {\n            margin-top: ", ";\n        }\n    }\n"], ["\n    li {\n        margin: ", " 0;\n        &:last-child {\n            margin-bottom: ", ";\n        }\n        &:first-child {\n            margin-top: ", ";\n        }\n    }\n"])), spacings.S1, spacings.S2, spacings.S2); };
export var ListStyled = styled('ul').attrs(function (_a) {
    var list = _a.theme.list;
    return ({ list: list });
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    padding: 0;\n    margin: 0;\n    display: flex;\n    list-style: none;\n    flex-direction: ", ";\n    ", ";\n    ", ";\n"], ["\n    padding: 0;\n    margin: 0;\n    display: flex;\n    list-style: none;\n    flex-direction: ", ";\n    ", ";\n    ", ";\n"])), function (_a) {
    var variant = _a.variant;
    return (variant === 'horizontal' ? 'row' : 'column');
}, function (_a) {
    var list = _a.list, variant = _a.variant;
    return variant === 'horizontal' && horizontal(list);
}, function (_a) {
    var list = _a.list, variant = _a.variant;
    return variant === 'vertical' && vertical(list);
});
ListStyled.defaultProps = {
    theme: defaultTheme
};
var templateObject_1, templateObject_2, templateObject_3;
