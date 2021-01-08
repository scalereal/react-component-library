var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
export var Modal = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    margin: 1%;\n    width: 98%;\n    pointer-events: auto;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid ", ";\n    border-radius: .3rem;\n    outline: 0;\n    box-shadow: 0 0.5rem 2rem ", ";\n"], ["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    margin: 1%;\n    width: 98%;\n    pointer-events: auto;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid ", ";\n    border-radius: .3rem;\n    outline: 0;\n    box-shadow: 0 0.5rem 2rem ", ";\n"])), function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return borderColor ? borderColor : theme.modal.defaults.borderColor;
}, function (_a) {
    var theme = _a.theme, shadowColor = _a.shadowColor;
    return shadowColor ? shadowColor : theme.modal.defaults.shadowColor;
});
Modal.defaultProps = {
    theme: defaultTheme
};
export var ModalHeader = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem 1rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(.3rem - 1px);\n    border-top-right-radius: calc(.3rem - 1px);\n"], ["\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem 1rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(.3rem - 1px);\n    border-top-right-radius: calc(.3rem - 1px);\n"])), function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return borderColor ? borderColor : theme.modal.defaults.borderColor;
});
ModalHeader.defaultProps = {
    theme: defaultTheme
};
export var ModalTitle = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin-bottom: 0;\n"], ["\n    margin-bottom: 0;\n"])));
export var ModalBody = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 1rem;\n"], ["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 1rem;\n"])));
export var ModalDescription = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    margin-top: 0;\n    margin-bottom: 1rem;\n"], ["\n    margin-top: 0;\n    margin-bottom: 1rem;\n"])));
export var ModalFooter = styled('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: flex-end;\n    padding: .75rem;\n    border-top: 1px solid ", ";\n    border-bottom-right-radius: calc(.3rem - 1px);\n    border-bottom-left-radius: calc(.3rem - 1px);\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: flex-end;\n    padding: .75rem;\n    border-top: 1px solid ", ";\n    border-bottom-right-radius: calc(.3rem - 1px);\n    border-bottom-left-radius: calc(.3rem - 1px);\n"])), function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return borderColor ? borderColor : theme.modal.defaults.borderColor;
});
ModalFooter.defaultProps = {
    theme: defaultTheme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
