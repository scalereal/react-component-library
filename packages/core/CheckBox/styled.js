var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { checkBoxTheme } from "../../theme/core/checkBox";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export var mixin = function (size) {
    switch (size) {
        case "XS":
            return "input[type=\"checkbox\"]{\n                width: 1.4rem;\n                height: 1.4rem;\n                }\n                input[type=\"checkbox\"]:checked:before {\n                    width: 4px;\n                    height: 10px;\n                    border-width: 0 3px 3px 0;\n                    margin-top: 2px;\n                }\n            ";
        case "S":
            return "input{\n                width: 1.8rem;\n                height: 1.8rem;\n                }\n                input[type=\"checkbox\"]:checked:before {\n                    width: 5px;\n                    height: 14px;\n                    border-width: 0 3px 3px 0;\n                    margin-top: 4px;\n                }\n            ";
        case "M":
            return "input{\n                width: 2.2rem;\n                height: 2.2rem;\n                }\n                input[type=\"checkbox\"]:checked:before {\n                    width: 7px;\n                    height: 18px;\n                    border-width: 0 4px 4px 0;\n                    margin-top: 4px;\n                }\n            ";
        case "L":
            return "input{\n                width: 2.6rem;\n                height: 2.6rem;\n                }\n                input[type=\"checkbox\"]:checked:before {\n                    width: 7px;\n                    height: 21px;\n                    border-width: 0 5px 5px 0;\n                    margin-top: 4px;\n                }\n            ";
        case "XL":
            return "input{\n                width: 3rem;\n                height: 3rem;\n                }\n                input[type=\"checkbox\"]:checked:before {\n                    width: 8px;\n                    height: 24px;\n                    border-width: 0 5.5px 5.5px 0;\n                    margin-top: 4px;\n                }\n            ";
    }
};
var labelpos = function (position) {
    switch (position) {
        case "top":
            return "\n                span{\n                    display:block;\n                    position:relative;\n                    bottom:35px;\n                }\n                input{\n                    position:relative;\n                    top:35px;\n                }\n            ";
        case "bottom":
            return "span{\n                display:block;\n                width:100%;\n                padding:0;\n            }\n            ";
        case "left":
            return "span{\n                padding-right:1.6rem;\n            }\n            ";
        default:
            return "span{\n                padding: 0px 1.6rem;\n            }\n            ";
    }
    ;
};
export var ErrorLabel = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display:block;\n    color: ", ";\n    padding-bottom:0.5rem;\n    padding-left:0.3rem;\n"], ["\n    display:block;\n    color: ", ";\n    padding-bottom:0.5rem;\n    padding-left:0.3rem;\n"])), checkBoxTheme.defaults.errorTextColor);
export var StyledLabel = styled.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", ";\n    cursor: pointer;\n    padding-bottom: 0.5rem;\n    user-select: none;\n    ", ";\n    \n    span{\n        vertical-align:middle;\n        };\n\n    input[type=\"checkbox\"] {\n        vertical-align:middle;\n        border: 1px solid ", ";\n        -webkit-appearance: none;\n        -webkit-transition: box-shadow 200ms;\n        -webkit-border-radius:5px;\n        border-radius:5px;\n        \n        &:focus {\n            outline:none;\n        };\n        &:checked {\n            background-color: ", ";\n            &:before {\n                content: '';\n                display: block;\n                border: solid #fff;\n                -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n                margin:auto;\n            };\n        };\n\n    };\n    ", ";\n    ", ";\n    ", ";\n        \n"], ["\n    ",
    ";\n    cursor: pointer;\n    padding-bottom: 0.5rem;\n    user-select: none;\n    ", ";\n    \n    span{\n        vertical-align:middle;\n        };\n\n    input[type=\"checkbox\"] {\n        vertical-align:middle;\n        border: 1px solid ", ";\n        -webkit-appearance: none;\n        -webkit-transition: box-shadow 200ms;\n        -webkit-border-radius:5px;\n        border-radius:5px;\n        \n        &:focus {\n            outline:none;\n        };\n        &:checked {\n            background-color: ", ";\n            &:before {\n                content: '';\n                display: block;\n                border: solid #fff;\n                -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n                margin:auto;\n            };\n        };\n\n    };\n    ",
    ";\n    ", ";\n    ", ";\n        \n"])), function (pr) { return pr.labelPosition === 'left' ? "display:flex;\n            flex-direction:row-reverse;\n            justify-content:flex-end;" : "display:block;"; }, function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return pr.errorText || pr.hasError ? '#CC0000' : checkBoxTheme.defaults.borderColor; }, function (pr) { return pr.hasError ? '#CC0000' : pr.bgColor || checkBoxTheme.defaults.bgColor; }, function (pr) { return pr.hoverEffect ? "&:hover {\n        " + (pr.labelHoverEffect ? "span{color: " + pr.labelHoverColor + ";}" : '') + "\n        input[type=\"checkbox\"]:checked{\n            background-color: " + (pr.hoverBgColor || checkBoxTheme.defaults.hoverBgColor) + ";\n        };\n        input[type=\"checkbox\"]{\n            border-color:" + checkBoxTheme.defaults.bgColor + ";\n            box-shadow: 0px 4px 19px " + (pr.hoverShadowColor || checkBoxTheme.defaults.shadowColor) + ";\n            }\n        }\n        " :
    ''; }, function (pr) { return pr.size && mixin(pr.size); }, function (pr) { return labelpos(pr.labelPosition); });
export var CheckBoxWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var templateObject_1, templateObject_2, templateObject_3;
