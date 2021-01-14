var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Loader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n    width: .15em;\n    height: .15em;\n    background-color: currentcolor;\n    border-radius: 100%;\n    animation: loader-39-1 30s infinite linear;\n\t&:before, &:after {\n\t\tcontent: '';\n\t\tborder-radius: 100%;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\t&:before {\n\t\twidth: .3em;\n\t\theight: 1em;\n\t\tanimation: loader-39-2 .8s linear infinite;\n\t}\n\t&:after {\n\t\twidth: 1em;\n\t\theight: .3em;\n\t\tanimation: loader-39-2 1.2s linear infinite;\n\t}\n\n    @keyframes loader-39-1 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes loader-39-2 {\n        0% {\n            box-shadow: 0.04em -0.04em 0 0.02em currentcolor;\n        }\n        25% {\n            box-shadow: 0.04em 0.04em 0 0.02em currentcolor;\n        }\n        50% {\n            box-shadow: -0.04em 0.04em 0 0.02em currentcolor;\n        }\n        75% {\n            box-shadow: -0.04em -0.04em 0 0.02em currentcolor;\n        }\n        100% {\n            box-shadow: 0.04em -0.04em 0 0.02em currentcolor;\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n    width: .15em;\n    height: .15em;\n    background-color: currentcolor;\n    border-radius: 100%;\n    animation: loader-39-1 30s infinite linear;\n\t&:before, &:after {\n\t\tcontent: '';\n\t\tborder-radius: 100%;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\t&:before {\n\t\twidth: .3em;\n\t\theight: 1em;\n\t\tanimation: loader-39-2 .8s linear infinite;\n\t}\n\t&:after {\n\t\twidth: 1em;\n\t\theight: .3em;\n\t\tanimation: loader-39-2 1.2s linear infinite;\n\t}\n\n    @keyframes loader-39-1 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes loader-39-2 {\n        0% {\n            box-shadow: 0.04em -0.04em 0 0.02em currentcolor;\n        }\n        25% {\n            box-shadow: 0.04em 0.04em 0 0.02em currentcolor;\n        }\n        50% {\n            box-shadow: -0.04em 0.04em 0 0.02em currentcolor;\n        }\n        75% {\n            box-shadow: -0.04em -0.04em 0 0.02em currentcolor;\n        }\n        100% {\n            box-shadow: 0.04em -0.04em 0 0.02em currentcolor;\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader + "{\n                margin: 10px;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader + "{\n                margin: 10px;\n            }\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader + "{\n                margin: 17px;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader + "{\n                margin: 25px;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader + "{\n                margin: 45px;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader + "{\n                margin: 55px;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader + "{\n            margin: 10px;\n        }\n       ";
    }
};
export var LoaderWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1, templateObject_2;
