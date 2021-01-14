var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Loader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tbackground-color: currentcolor;\n\t\tleft: 50%;\n\t\tright: 0;\n\t\ttop: 0;\n\t\tbottom: 50%;\n\t\tbox-shadow: -.5em 0 0 currentcolor;\n\t\tanimation: loader-12 1s linear infinite;\n\t}\n\t&:after {\n\t\ttop: 50%;\n\t\tbottom: 0;\n\t\tanimation-delay: .25s;\n\t}\n\n    @keyframes loader-12 {\n        0%,\n        100% {\n            box-shadow: -.5em 0 0 transparent;\n            background-color: currentcolor;\n        }\n        50% {\n            box-shadow: -.5em 0 0 currentcolor;\n            background-color: transparent;\n        }\n    }\n\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tbackground-color: currentcolor;\n\t\tleft: 50%;\n\t\tright: 0;\n\t\ttop: 0;\n\t\tbottom: 50%;\n\t\tbox-shadow: -.5em 0 0 currentcolor;\n\t\tanimation: loader-12 1s linear infinite;\n\t}\n\t&:after {\n\t\ttop: 50%;\n\t\tbottom: 0;\n\t\tanimation-delay: .25s;\n\t}\n\n    @keyframes loader-12 {\n        0%,\n        100% {\n            box-shadow: -.5em 0 0 transparent;\n            background-color: currentcolor;\n        }\n        50% {\n            box-shadow: -.5em 0 0 currentcolor;\n            background-color: transparent;\n        }\n    }\n\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
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
export var LoaderWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1, templateObject_2;
