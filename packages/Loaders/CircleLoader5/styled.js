var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Loader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border: 0 solid transparent;\n\tborder-radius: 50%;\n\tposition: relative;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tborder: .2em solid currentcolor;\n\t\tborder-radius: 50%;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tanimation: loader-07 1s linear infinite;\n\t\topacity: 0;\n\t}\n\t&:before {\n\t\tanimation-delay: 1s;\n\t}\n\t&:after {\n\t\tanimation-delay: .5s;\n\t}\n\n    @keyframes loader-07 {\n        0% {\n            transform: scale(0);\n            opacity: 0;\n        }\n        50% {\n            opacity: 1;\n        }\n        100% {\n            transform: scale(1);\n            opacity: 0;\n        }\n    }\n\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border: 0 solid transparent;\n\tborder-radius: 50%;\n\tposition: relative;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tborder: .2em solid currentcolor;\n\t\tborder-radius: 50%;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tanimation: loader-07 1s linear infinite;\n\t\topacity: 0;\n\t}\n\t&:before {\n\t\tanimation-delay: 1s;\n\t}\n\t&:after {\n\t\tanimation-delay: .5s;\n\t}\n\n    @keyframes loader-07 {\n        0% {\n            transform: scale(0);\n            opacity: 0;\n        }\n        50% {\n            opacity: 1;\n        }\n        100% {\n            transform: scale(1);\n            opacity: 0;\n        }\n    }\n\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader + "{\n                margin: 0 5px 5px 0;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader + "{\n                margin: 0 8px 8px 0;\n            }\n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader + "{\n                margin: 0 15px 15px 0;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader + "{\n                margin: 0 20px 20px 0;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader + "{\n                margin: 0 30px 30px 0;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader + "{\n                margin: 0 45px 45px 0;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader + "{\n            margin: 0 8px 8px 0;\n        }\n       ";
    }
};
export var LoaderWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.display ? 'inline-block' : 'none'; });
var templateObject_1, templateObject_2;
