var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Loader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s loader-01 linear infinite;\n\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s loader-01 linear infinite;\n\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader + "{\n                border: 0.188em dotted currentcolor;\n            }";
        case "XS":
            return "font-size: 1rem;\n            " + Loader + "{\n                border: 0.188em dotted currentcolor;\n            }\n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader + "{\n                border: 0.2em dotted currentcolor;\n            }";
        case "M":
            return "font-size: 3rem;\n            " + Loader + "{\n                border: 0.2em dotted currentcolor;\n            }";
        case "L":
            return "font-size: 5rem;\n            " + Loader + "{\n                border: 0.2em dotted currentcolor;\n            }";
        case "XL":
            return "font-size: 6rem;\n            " + Loader + "{\n                border: 0.2em dotted currentcolor;\n            }";
        default:
            return "font-size: 1rem;\n        " + Loader + "{\n            border: 0.15em dotted currentcolor;\n        }";
    }
};
export var LoaderWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.display ? 'inline-block' : 'none'; });
var templateObject_1, templateObject_2;
