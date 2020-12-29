var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { radioTheme } from '../../theme/core/radio';
export var RadioSpan = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    /* position: absolute;\n    top: 0;\n    left: 0; */\n    position: relative;\n    text-align:center;\n    background-color: ", ";\n    border-radius: 50%;\n    ", ";\n\n    &:after {\n        content: \"\";\n        position:absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        display: none;\n        border-radius: 50%;\n    }\n\n"], ["\n    /* position: absolute;\n    top: 0;\n    left: 0; */\n    position: relative;\n    text-align:center;\n    background-color: ", ";\n    border-radius: 50%;\n    ", ";\n\n    &:after {\n        content: \"\";\n        position:absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        display: none;\n        border-radius: 50%;\n    }\n\n"])), function (pr) { return pr.bgColor || radioTheme.defaults.bgColor; }, function (pr) { return (pr.hasError || pr.errorText !== '') ? "border:1px solid " + radioTheme.defaults.errorTextColor : ''; });
export var ErrorLabel = styled.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display:block;\n    color: ", ";\n    padding:0.5rem 0;\n"], ["\n    display:block;\n    color: ", ";\n    padding:0.5rem 0;\n"])), radioTheme.defaults.errorTextColor);
var mixin = function (size) {
    switch (size) {
        case "XS":
            return "\n            " + RadioSpan + "{\n                width: 1rem;\n                height: 1rem;\n                &:after {\n                    width: 0.5rem;\n                    height: 0.5rem;\n                }\n            }\n            ";
        case "S":
            return "\n            " + RadioSpan + "{\n                width: 1.4rem;\n                height: 1.4rem;\n                &:after {\n                    width: 0.8rem;\n                    height: 0.8rem;\n                }\n            }\n            ";
        case "M":
            return "\n            " + RadioSpan + "{\n                width: 1.8rem;\n                height: 1.8rem;\n                &:after {\n                    width: 1.2rem;\n                    height: 1.2rem;\n                }\n            }\n            ";
        case "L":
            return "\n            " + RadioSpan + "{\n                width: 2rem;\n                height: 2rem;\n                &:after {\n                    width: 1.4rem;\n                    height: 1.4rem;\n                }\n            }\n            ";
        case "XL":
            return "\n            " + RadioSpan + "{\n                width: 2.4rem;\n                height: 2.4rem;\n                &:after {\n                    width: 1.8rem;\n                    height: 1.8rem;\n                }\n            }\n            ";
    }
};
var labelPos = function (position) {
    switch (position) {
        case "top":
            return "flex-direction:column;\n            align-items: flex-start;\n            .radioLabel{\n                    padding:0.5rem 0;\n                }\n                \n            ";
        case "bottom":
            return "flex-direction:column-reverse;\n            align-items: flex-start;\n            .radioLabel{\n                    padding:0.5rem 0;\n                }\n            ";
        case "left":
            return "flex-direction:row;\n            justify-content:flex-start;\n            .radioLabel{\n                padding-right:1.6rem;\n                padding-left:0;\n            }\n            ";
        default:
            return ".radioLabel{\n                padding-left:1.3rem;\n            }\n            ";
    }
    ;
};
export var StyledLabel = styled.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    position:relative;\n    cursor: pointer;\n    /* margin:1rem 0; */\n    align-items: center;\n    flex-direction:row-reverse;\n    justify-content: flex-end;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    color:", ";\n    ", "\n\n    input{\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n        &:checked ~ ", " {\n            &:after {\n                display: block;\n                background-color: ", ";\n            }\n        }\n    }\n\n    ", "\n\n    ", "\n    ", ";\n\n"], ["\n    display: flex;\n    position:relative;\n    cursor: pointer;\n    /* margin:1rem 0; */\n    align-items: center;\n    flex-direction:row-reverse;\n    justify-content: flex-end;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    color:", ";\n    ", "\n\n    input{\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n        &:checked ~ ", " {\n            &:after {\n                display: block;\n                background-color: ", ";\n            }\n        }\n    }\n\n    ",
    "\n\n    ", "\n    ", ";\n\n"])), function (pr) { return pr.labelColor || radioTheme.defaults.textColor; }, function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, RadioSpan, function (pr) { return pr.checkedBgColor || radioTheme.defaults.checkedBgColor; }, function (pr) { return pr.hoverEffect ? "&:hover{ \n        " + RadioSpan + " {\n            background-color: " + (pr.hoverBgColor || radioTheme.defaults.hoverBgColor) + ";\n        }; \n        input:checked ~ " + RadioSpan + ":after{\n            background-color: " + (pr.hoverCheckedBgColor || radioTheme.defaults.hoverCheckedBgColor) + ";\n        };\n        " + (pr.labelHoverEffect ? ".radioLabel{\n            color:" + pr.hoverLabelColor + ";\n        }" : '') + " \n    };" : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return labelPos(pr.labelPosition); });
export var RadioWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
