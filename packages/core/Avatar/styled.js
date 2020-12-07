var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
var mixin = function (size) {
    switch (size) {
        case "ES":
            return "width: 50px;\n            height: 50px;\n            line-height: 50px;\n            img{width: 50px;\n                height: 50px;\n            }\n            span{font-size:1.5em};\n            ";
        case "S":
            return "width: 100px;\n            height: 100px;\n            line-height: 100px;\n            img{width: 100px;\n                height: 100px;\n            }\n            span{font-size:3.5em}";
        case "M":
            return "width: 150px;\n            height: 150px;\n            line-height: 150px;\n            img{\n                width: 150px;\n                height: 150px;\n            }\n            span{font-size:5em}";
        case "L":
            return "width: 200px;\n            height: 200px;\n            line-height: 200px;\n            img{\n                width: 200px;\n                height: 200px;\n            }\n            span{font-size:7em}";
        default:
            return "border:1px solid red;";
    }
};
export var StyledAvatar = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    ", "\n    border-radius: 50%;\n    text-align:center;\n    background-color: ", ";\n\n    ", "\n\n    img{\n        border-radius: 50%;\n    }\n    \n    span{\n        display: inline-block;\n        vertical-align: middle;\n        line-height: normal;\n        color: ", ";\n    }\n"], ["\n    ", "\n    ", "\n    border-radius: 50%;\n    text-align:center;\n    background-color: ", ";\n\n    ",
    "\n\n    img{\n        border-radius: 50%;\n    }\n    \n    span{\n        display: inline-block;\n        vertical-align: middle;\n        line-height: normal;\n        color: ", ";\n    }\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.bgColor || "#C4C4C4"; }, function (pr) { return pr.hoverEffect ? "&:hover {\n        background-color: " + (pr.hoverBgColor || '#126AFA') + ";\n        box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || '#004AD7') + ";\n        span{\n            color: " + (pr.hoverTextColor || '#EFF2F4') + ";\n            text-shadow: 0px 5px 8px " + pr.hoverTextShadowColor + ";\n        }\n        }\n        " :
    ''; }, function (pr) { return pr.textColor || '#126AFA'; });
var templateObject_1;
