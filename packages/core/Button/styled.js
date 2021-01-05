var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { buttonTheme } from '../../theme/core/button';
import { defaultTheme } from "../../theme/theme";
var SizeMixin = function (size) {
    switch (size) {
        case "XS":
            return "padding: 0.6rem 2.4rem 0.8rem;\n            ";
        case "S":
            return "padding: 0.8rem 2.4rem 1rem;\n            ";
        case "M":
            return "padding: 1rem 2.4rem 1.2rem;\n           ";
        case "L":
            return "padding: 1.2rem 2.4rem 1.4rem;\n            ";
        case "XL":
            return "padding: 1.4rem 2.4rem 1.6rem;\n        ";
        default:
            return "border:1px solid red;";
    }
};
var hoverPick = function (pr) {
    switch (pr.type) {
        case "primary":
            {
                return "background: " + (pr.bgColor || buttonTheme.primary.bgColor) + ";\n            border:none;\n            span{color:" + (pr.textColor || buttonTheme.defaults.textColor) + ";};\n            " + (pr.hoverEffect ? "&:hover {\n                background-color: " + (pr.hoverBgColor || buttonTheme.primary.hoverBgColor) + ";\n                box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || buttonTheme.defaults.hoverShadowColor) + ";\n                span{color:" + (pr.hoverTextColor || defaultTheme.whiteColor) + ";};\n                };" : '') + "\n            ";
            }
            ;
        case "secondary":
            return "background:transparent;\n            border:1px solid " + defaultTheme.secondaryColor + ";\n            span{color:" + (pr.textColor || defaultTheme.secondaryActiveColor) + ";};\n            " + (pr.hoverEffect ? "&:hover {\n            border:1px solid " + defaultTheme.secondaryActiveColor + ";\n            box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || defaultTheme.shadowColor) + ";\n            span{color:" + (pr.hoverTextColor || defaultTheme.secondaryActiveColor) + ";};\n            };" : '') + "\n            ";
        case "warning":
            return "\n            background: " + (pr.bgColor || defaultTheme.warningColor) + ";\n            border:none;\n            span{color:" + (pr.textColor || defaultTheme.whiteColor) + ";};\n            " + (pr.hoverEffect ? "&:hover {\n                background-color: " + (pr.hoverBgColor || defaultTheme.warningActiveColor) + ";\n                box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || defaultTheme.shadowColor) + ";\n                span{color:" + (pr.hoverTextColor || defaultTheme.whiteColor) + ";};\n                };" : '') + "\n           ";
        case "danger":
            return "background: " + (pr.bgColor || defaultTheme.dangerColor) + ";\n            border:none;\n            span{color:" + (pr.textColor || defaultTheme.whiteColor) + ";}\n            " + (pr.hoverEffect ? "&:hover {\n                background-color: " + (pr.hoverBgColor || defaultTheme.dangerActiveColor) + ";\n                box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || defaultTheme.shadowColor) + ";\n                span{color:" + (pr.hoverTextColor || defaultTheme.whiteColor) + ";};\n                };" : '') + "\n            ";
        case "success":
            return "background: " + (pr.bgColor || defaultTheme.successColor) + ";\n        border:none;\n        span{color:" + (pr.textColor || defaultTheme.whiteColor) + ";};\n        " + (pr.hoverEffect ? "&:hover {\n            background-color: " + (pr.hoverBgColor || defaultTheme.successActiveColor) + ";\n            box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || defaultTheme.shadowColor) + ";\n            span{color:" + (pr.hoverTextColor || defaultTheme.whiteColor) + ";};\n            };" : '') + "\n        ";
        default:
            return "background: " + (pr.bgColor || defaultTheme.primaryColor) + ";\n        border:none;\n        span{color:" + (pr.textColor || defaultTheme.whiteColor) + ";};\n        " + (pr.hoverEffect ? "&:hover {\n            background-color: " + (pr.hoverBgColor || defaultTheme.primaryActiveColor) + ";\n            box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || defaultTheme.shadowColor) + ";\n            span{color:" + (pr.hoverTextColor || defaultTheme.whiteColor) + ";};\n            };" : '');
    }
};
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    ", ";\n    margin: 0.5rem;\n    /* font-size: 20px; */\n    border-radius: 0.5rem;\n    text-align:center;\n    position: relative;\n    user-select: none;\n    font-family: inherit;\n    text-decoration: none;\n    transition: all 100ms ease-out 0s;\n    display: inline-flex;\n    -webkit-box-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    align-items: center;\n"], ["\n    ", ";\n    ", ";\n    ", ";\n    margin: 0.5rem;\n    /* font-size: 20px; */\n    border-radius: 0.5rem;\n    text-align:center;\n    position: relative;\n    user-select: none;\n    font-family: inherit;\n    text-decoration: none;\n    transition: all 100ms ease-out 0s;\n    display: inline-flex;\n    -webkit-box-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    align-items: center;\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return SizeMixin(pr.size); }, function (pr) { return hoverPick(pr); });
var templateObject_1;
