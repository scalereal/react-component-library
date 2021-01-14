var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Loader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-radius: 50%;\n\tanimation-fill-mode: both;\n\tanimation: loader-13 1.8s infinite ease-in-out;\n    &:after,&:before{\n        border-radius: 50%;\n        animation-fill-mode: both;\n        animation: loader-13 1.8s infinite ease-in-out;\n    }\n\n    /* color: currentcolor; */\n    position: relative;\n    transform: translateZ(0);\n    animation-delay: -0.16s;\n    &:before {\n        right: 100%;\n        animation-delay: -0.32s;\n    }\n    &:after {\n        left: 100%;\n    }\n    &:before,\n    &:after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        width: inherit;\n        height: inherit;\n    }\n\n    @keyframes loader-13 {\n        0%,\n        80%,\n        100% {\n            box-shadow: 0 1em 0 -1em;\n        }\n        40% {\n            box-shadow: 0 1em 0 -.2em;\n        }\n    }\n\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-radius: 50%;\n\tanimation-fill-mode: both;\n\tanimation: loader-13 1.8s infinite ease-in-out;\n    &:after,&:before{\n        border-radius: 50%;\n        animation-fill-mode: both;\n        animation: loader-13 1.8s infinite ease-in-out;\n    }\n\n    /* color: currentcolor; */\n    position: relative;\n    transform: translateZ(0);\n    animation-delay: -0.16s;\n    &:before {\n        right: 100%;\n        animation-delay: -0.32s;\n    }\n    &:after {\n        left: 100%;\n    }\n    &:before,\n    &:after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        width: inherit;\n        height: inherit;\n    }\n\n    @keyframes loader-13 {\n        0%,\n        80%,\n        100% {\n            box-shadow: 0 1em 0 -1em;\n        }\n        40% {\n            box-shadow: 0 1em 0 -.2em;\n        }\n    }\n\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader + "{\n                margin:0 15px;\n                top: -1em;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader + "{\n                margin:0 18px;\n                top: -1em;\n            }\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader + "{\n                margin:0 25px;\n                top: -1.1em;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader + "{\n                margin:0 40px;\n                top: -1.1em;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader + "{\n                margin:0 65px;\n                top: -1.2em;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader + "{\n                margin:0 80px;\n                top: -1.2em;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader + "{\n            margin:0 25px;\n        }\n       ";
    }
};
export var LoaderWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1, templateObject_2;
