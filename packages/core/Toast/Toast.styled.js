var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { defaultTheme } from '../../theme';
var getPosition = function (position) {
    switch (position) {
        case 'top-left':
            return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                top: 0;\n                left: 0;\n            "], ["\n                top: 0;\n                left: 0;\n            "])));
        case 'top-center':
            return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                top: 0;\n                left: 50%;\n                transform: translateX(-50%);\n            "], ["\n                top: 0;\n                left: 50%;\n                transform: translateX(-50%);\n            "])));
        case 'top-right':
            return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                top: 0;\n                right: 0;\n            "], ["\n                top: 0;\n                right: 0;\n            "])));
        case 'right-center':
            return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                right: 0;\n                top: 50%;\n                transform: translateY(-50%);\n            "], ["\n                right: 0;\n                top: 50%;\n                transform: translateY(-50%);\n            "])));
        case 'left-center':
            return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                left: 0;\n                top: 50%;\n                transform: translateY(-50%);\n            "], ["\n                left: 0;\n                top: 50%;\n                transform: translateY(-50%);\n            "])));
        case 'bottom-left':
            return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                bottom: 0;\n                left: 0;\n            "], ["\n                bottom: 0;\n                left: 0;\n            "])));
        case 'bottom-center':
            return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                bottom: 0;\n                left: 50%;\n                transform: translateX(-50%);\n            "], ["\n                bottom: 0;\n                left: 50%;\n                transform: translateX(-50%);\n            "])));
        case 'bottom-right':
            return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                bottom: 0;\n                right: 0;\n            "], ["\n                bottom: 0;\n                right: 0;\n            "])));
    }
};
var getFlexPosition = function (position) {
    switch (position) {
        case 'top-left':
            return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                align-items: flex-start;\n            "], ["\n                align-items: flex-start;\n            "])));
        case 'top-center':
            return css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                align-items:center;\n            "], ["\n                align-items:center;\n            "])));
        case 'top-right':
            return css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                align-items:flex-end;\n            "], ["\n                align-items:flex-end;\n            "])));
    }
};
var getBorder = function (borderPosition) {
    switch (borderPosition) {
        case 'top':
            return css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n                border-bottom:none;\n                border-left:none;\n                border-right:none;\n            "], ["\n                border-bottom:none;\n                border-left:none;\n                border-right:none;\n            "])));
        case 'left':
            return css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n                border-bottom:none;\n                border-top:none;\n                border-right:none;\n            "], ["\n                border-bottom:none;\n                border-top:none;\n                border-right:none;\n            "])));
        case 'right':
            return css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n                border-bottom:none;\n                border-left:none;\n                border-top:none;\n            "], ["\n                border-bottom:none;\n                border-left:none;\n                border-top:none;\n            "])));
        case 'bottom':
            return css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n                border-top:none;\n                border-left:none;\n                border-right:none;\n            "], ["\n                border-top:none;\n                border-left:none;\n                border-right:none;\n            "])));
    }
};
export var ToastContainer = styled('div')(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n\tposition: ", ";\n    display: flex;\n    /* align-items: flex-end; */\n\tflex-direction: column;\n\theight: auto;\n\twidth: auto;\n\tz-index: 999;\n    ", "\n    ", "\n"], ["\n\tposition: ", ";\n    display: flex;\n    /* align-items: flex-end; */\n\tflex-direction: column;\n\theight: auto;\n\twidth: auto;\n\tz-index: 999;\n    ", "\n    ", "\n"])), function (pr) { return pr.fixed ? 'fixed' : 'relative'; }, function (_a) {
    var position = _a.position, theme = _a.theme, fixed = _a.fixed;
    return (position && fixed ? getPosition(position) : theme.toast.defaults.position);
}, function (_a) {
    var position = _a.position, fixed = _a.fixed;
    return (position && fixed !== true ? getFlexPosition(position) : '');
});
ToastContainer.defaultProps = {
    theme: defaultTheme
};
export var Toast = styled('div')(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    cursor: pointer;\n\tdisplay: flex;\n    flex-direction: column;\n    position: relative;\n\twidth: fit-content;\n    height: auto;\n    padding: 12px;\n    margin: 10px;\n\tmin-width: 250px;\n    background-color:", ";\n    border-radius: 3px;\n    -webkit-box-shadow: 0 0 10px", ";\n\t-moz-box-shadow: 0 0 10px ", ";\n\tbox-shadow: 0 0 10px ", ";\n\t-webkit-transition: opacity 1s ease 0.5s;\n\t-moz-transition: opacity 1s ease 0.5s;\n\ttransition: opacity 1s ease 0.5s;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n    border: solid 4px ", ";\n    ", "\n"], ["\n    cursor: pointer;\n\tdisplay: flex;\n    flex-direction: column;\n    position: relative;\n\twidth: fit-content;\n    height: auto;\n    padding: 12px;\n    margin: 10px;\n\tmin-width: 250px;\n    background-color:", ";\n    border-radius: 3px;\n    -webkit-box-shadow: 0 0 10px", ";\n\t-moz-box-shadow: 0 0 10px ", ";\n\tbox-shadow: 0 0 10px ", ";\n\t-webkit-transition: opacity 1s ease 0.5s;\n\t-moz-transition: opacity 1s ease 0.5s;\n\ttransition: opacity 1s ease 0.5s;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n    border: solid 4px ", ";\n    ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? '' : _b;
    return (theme.toast.statusColor[variant].bgColor);
}, function (_a) {
    var theme = _a.theme, shadowColor = _a.shadowColor;
    return (shadowColor ? shadowColor : theme.toast.defaults.shadowColor);
}, function (_a) {
    var theme = _a.theme, shadowColor = _a.shadowColor;
    return (shadowColor ? shadowColor : theme.toast.defaults.shadowColor);
}, function (_a) {
    var theme = _a.theme, shadowColor = _a.shadowColor;
    return (shadowColor ? shadowColor : theme.toast.defaults.shadowColor);
}, function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? '' : _b, borderColor = _a.borderColor;
    return (borderColor ? borderColor : theme.toast.statusColor[variant].color);
}, function (_a) {
    var borderPosition = _a.borderPosition;
    return (getBorder(borderPosition));
});
export var ToastHeader = styled('div')(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.5rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(3px - 1px);\n    border-top-right-radius: calc(3px - 1px);\n"], ["\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.5rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(3px - 1px);\n    border-top-right-radius: calc(3px - 1px);\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? '' : _b, borderColor = _a.borderColor;
    return (borderColor ? borderColor : theme.toast.statusColor[variant].borderColor);
});
export var ToastBody = styled('div')(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 0.5rem;\n"], ["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 0.5rem;\n"])));
Toast.displayName = "Toast";
Toast.defaultProps = {
    theme: defaultTheme
};
ToastHeader.defaultProps = {
    theme: defaultTheme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
