var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var StyledLoader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s StyledLoader-01 linear infinite;\n\n    @keyframes StyledLoader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s StyledLoader-01 linear infinite;\n\n    @keyframes StyledLoader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"])));
var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + StyledLoader + "{\n                border: 0.188em solid transparent;\n            }";
        case "XS":
            return "font-size: 1rem;\n            " + StyledLoader + "{\n                border: 0.188em solid transparent;\n            }\n            ";
        case "S":
            return "font-size: 2rem;\n            " + StyledLoader + "{\n                border: 0.2em solid transparent;\n            }";
        case "M":
            return "font-size: 3rem;\n            " + StyledLoader + "{\n                border: 0.2em solid transparent;\n            }";
        case "L":
            return "font-size: 5rem;\n            " + StyledLoader + "{\n                border: 0.2em solid transparent;\n            }";
        case "XL":
            return "font-size: 6rem;\n            " + StyledLoader + "{\n                border: 0.2em solid transparent;\n            }";
        default:
            return "font-size: 1rem;\n        " + StyledLoader + "{\n            border: 0.15em solid transparent;\n        }";
    }
};
export var LoaderWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        border-left-color:  ", ";\n        border-right-color:  ", ";\n    }\n"], ["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        border-left-color:  ", ";\n        border-right-color:  ", ";\n    }\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.display ? 'inline-block' : 'none'; }, StyledLoader, function (pr) { return pr.Color ? pr.Color : 'inherit'; }, function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var templateObject_1, templateObject_2;
