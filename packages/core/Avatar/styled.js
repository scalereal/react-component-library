var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { avatarTheme } from '../../theme/core/avatar';
var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "width: 30px;\n            height: 30px;\n            line-height: 30px;\n            img{width: 30px;\n                height: 30px;\n            }\n            span{font-size:0.8em};\n            ";
        case "XS":
            return "width: 50px;\n            height: 50px;\n            line-height: 50px;\n            img{width: 50px;\n                height: 50px;\n            }\n            span{font-size:1.5em};\n            ";
        case "S":
            return "width: 100px;\n            height: 100px;\n            line-height: 100px;\n            img{width: 100px;\n                height: 100px;\n            }\n            span{font-size:3.5em}";
        case "M":
            return "width: 150px;\n            height: 150px;\n            line-height: 150px;\n            img{\n                width: 150px;\n                height: 150px;\n            }\n            span{font-size:5em}";
        case "L":
            return "width: 200px;\n            height: 200px;\n            line-height: 200px;\n            img{\n                width: 200px;\n                height: 200px;\n            }\n            span{font-size:7em}";
        case "XL":
            return "width: 250px;\n            height: 250px;\n            line-height: 250px;\n            img{\n                width: 250px;\n                height: 250px;\n            }\n            span{font-size:9em}";
        default:
            return "border:1px solid red;";
    }
};
export var StyledAvatar = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    ", "\n    ", ";\n    margin:0 0.5rem;\n    border-radius: 50%;\n    text-align:center;\n    background-color: ", ";\n\n    ", "\n\n    img{\n        border-radius: 50%;\n        display: inline-block;\n        vertical-align: middle;\n        line-height: normal;\n    }\n    \n    span{\n        display: inline-block;\n        vertical-align: middle;\n        line-height: normal;\n        color: ", ";\n    }\n"], ["\n    ", "\n    ", "\n    ", ";\n    margin:0 0.5rem;\n    border-radius: 50%;\n    text-align:center;\n    background-color: ", ";\n\n    ",
    "\n\n    img{\n        border-radius: 50%;\n        display: inline-block;\n        vertical-align: middle;\n        line-height: normal;\n    }\n    \n    span{\n        display: inline-block;\n        vertical-align: middle;\n        line-height: normal;\n        color: ", ";\n    }\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.display !== 'block' ? "display:" + pr.display + ";" : "display:block;"; }, function (pr) { return pr.bgColor || avatarTheme.defaults.bgColor; }, function (pr) { return pr.hoverEffect ? "&:hover {\n        background-color: " + (pr.hoverBgColor || avatarTheme.defaults.hoverBgColor) + ";\n        box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || avatarTheme.defaults.shadowColor) + ";\n        span{\n            color: " + (pr.hoverTextColor || avatarTheme.defaults.hoverTextColor) + ";\n            text-shadow: 0px 5px 8px " + pr.hoverTextShadowColor + ";\n        }\n        }\n        " :
    ''; }, function (pr) { return pr.textColor || avatarTheme.defaults.textColor; });
var templateObject_1;
