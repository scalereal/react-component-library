var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
export var Card = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    flex-direction: ", ";\n    min-width: 0;\n    margin:0.5rem;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid ", ";\n    border-radius: .3rem;\n    box-shadow: 0 0.5rem 2rem ", ";\n    width:18rem;\n    border-top-left-radius: calc(.3rem - 1px);\n    border-top-right-radius: calc(.3rem - 1px);\n    border-bottom-left-radius: calc(.3rem - 1px);\n    border-bottom-right-radius: calc(.3rem - 1px);\n"], ["\n    position: relative;\n    display: flex;\n    flex-direction: ", ";\n    min-width: 0;\n    margin:0.5rem;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid ", ";\n    border-radius: .3rem;\n    box-shadow: 0 0.5rem 2rem ", ";\n    width:18rem;\n    border-top-left-radius: calc(.3rem - 1px);\n    border-top-right-radius: calc(.3rem - 1px);\n    border-bottom-left-radius: calc(.3rem - 1px);\n    border-bottom-right-radius: calc(.3rem - 1px);\n"])), function (_a) {
    var variant = _a.variant;
    return variant === "vertical" ? "column" : "row";
}, function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return borderColor ? borderColor : theme.card.defaults.borderColor;
}, function (_a) {
    var theme = _a.theme, shadowColor = _a.shadowColor;
    return shadowColor ? shadowColor : theme.card.defaults.shadowColor;
});
Card.defaultProps = {
    theme: defaultTheme
};
export var CardHeader = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color:#fff;\n    width:", ";\n"], ["\n    background-color:#fff;\n    width:", ";\n"])), function (_a) {
    var variant = _a.variant;
    return variant === "vertical" ? "auto" : "10rem";
});
export var CardImage = styled('img')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width:100%;\n    height:100%;\n"], ["\n    width:100%;\n    height:100%;\n"])));
export var CardTitle = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin-bottom: .5rem;\n"], ["\n    margin-bottom: .5rem;\n"])));
export var CardBody = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    background-color:#fff;\n    height:100%;\n    width:", ";\n    text-align:", ";\n    flex: 1 1 auto;\n    padding: 1rem 1rem;\n"], ["\n    background-color:#fff;\n    height:100%;\n    width:", ";\n    text-align:", ";\n    flex: 1 1 auto;\n    padding: 1rem 1rem;\n"])), function (_a) {
    var variant = _a.variant;
    return variant === "vertical" ? "auto" : "8rem";
}, function (_a) {
    var textAlignment = _a.textAlignment;
    return textAlignment;
});
export var CardDescription = styled('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n"], ["\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
