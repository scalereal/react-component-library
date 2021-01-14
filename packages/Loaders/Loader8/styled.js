var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Loader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n\tanimation: loader-10-1 2.0s infinite linear;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\twidth: 0;\n\t\theight: 0;\n\t\tborder: .5em solid currentcolor;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tborder-radius: 100%;\n\t\tanimation: loader-10-2 2s infinite ease-in-out;\n\t}\n\t&:before {\n\t\ttop: 0;\n\t\tleft: 50%;\n\t}\n\t&:after {\n\t\tbottom: 0;\n\t\tright: 50%;\n\t\tanimation-delay: -1s;\n\t}\n\n    @keyframes loader-10-1 {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes loader-10-2 {\n        0%,\n        100% {\n            transform: scale(0);\n        }\n        50% {\n            transform: scale(1);\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n\tanimation: loader-10-1 2.0s infinite linear;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\twidth: 0;\n\t\theight: 0;\n\t\tborder: .5em solid currentcolor;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tborder-radius: 100%;\n\t\tanimation: loader-10-2 2s infinite ease-in-out;\n\t}\n\t&:before {\n\t\ttop: 0;\n\t\tleft: 50%;\n\t}\n\t&:after {\n\t\tbottom: 0;\n\t\tright: 50%;\n\t\tanimation-delay: -1s;\n\t}\n\n    @keyframes loader-10-1 {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes loader-10-2 {\n        0%,\n        100% {\n            transform: scale(0);\n        }\n        50% {\n            transform: scale(1);\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader + "{\n                margin: 5px 0 5px 10px;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader + "{\n                margin: 7px 0 7px 10px;\n            }\n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader + "{\n                margin: 15px 0 15px 20px;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader + "{\n                margin: 18px 0 18px 25px;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader + "{\n                margin: 28px 0 28px 40px;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader + "{\n                margin: 35px 0 35px 50px;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader + "{\n            margin: 15px 0 15px 20px;\n        }\n       ";
    }
};
export var LoaderWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1, templateObject_2;
