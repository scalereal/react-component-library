var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
export var Toast = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    pointer-events: auto;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid ", ";\n    border-radius: 0.3rem;\n    outline: 0;\n    box-shadow: 0 0.5rem 2rem ", ";\n"], ["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    pointer-events: auto;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid ", ";\n    border-radius: 0.3rem;\n    outline: 0;\n    box-shadow: 0 0.5rem 2rem ", ";\n"])), function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return (borderColor ? borderColor : theme.toast.borderColor);
}, function (_a) {
    var theme = _a.theme, shadowColor = _a.shadowColor;
    return (shadowColor ? shadowColor : theme.toast.borderColor);
});
export var ToastHeader = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem 1rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(0.3rem - 1px);\n    border-top-right-radius: calc(0.3rem - 1px);\n"], ["\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem 1rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(0.3rem - 1px);\n    border-top-right-radius: calc(0.3rem - 1px);\n"])), function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return (borderColor ? borderColor : theme.toast.borderColor);
});
export var ToastBody = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 1rem;\n    background-color:#fff;\n"], ["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 1rem;\n    background-color:#fff;\n"])));
export var ToastFooter = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    height:8px;\n    background-color:", ";\n"], ["\n    height:8px;\n    background-color:", ";\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (theme.toast.statusColor[variant]);
});
export var ToastCloseIcon = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position:absolute;\n    top:15px;\n    right:10px;\n"], ["\n    position:absolute;\n    top:15px;\n    right:10px;\n"])));
Toast.displayName = "Toast";
Toast.defaultProps = {
    theme: defaultTheme
};
ToastHeader.defaultProps = {
    theme: defaultTheme
};
ToastFooter.defaultProps = {
    theme: defaultTheme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
