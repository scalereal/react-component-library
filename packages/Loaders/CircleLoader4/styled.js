var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Loader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border: .2em solid currentcolor;\n\tborder-radius: 50%;\n\tanimation: loader-06 1s ease-out infinite;\n\n    @keyframes loader-06 {\n        0% {\n            transform: scale(0);\n            opacity: 0;\n        }\n        50% {\n            opacity: 1;\n        }\n        100% {\n            transform: scale(1);\n            opacity: 0;\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border: .2em solid currentcolor;\n\tborder-radius: 50%;\n\tanimation: loader-06 1s ease-out infinite;\n\n    @keyframes loader-06 {\n        0% {\n            transform: scale(0);\n            opacity: 0;\n        }\n        50% {\n            opacity: 1;\n        }\n        100% {\n            transform: scale(1);\n            opacity: 0;\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n           ";
        case "XS":
            return "font-size: 1rem;\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            ";
        case "M":
            return "font-size: 3rem;\n            ";
        case "L":
            return "font-size: 5rem;\n            ";
        case "XL":
            return "font-size: 6rem;\n            ";
        default:
            return "font-size: 1rem;\n       ";
    }
};
export var LoaderWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.display ? 'inline-block' : 'none'; });
var templateObject_1, templateObject_2;
