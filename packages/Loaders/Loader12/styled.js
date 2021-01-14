var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Loader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-radius: 50%;\n\tbox-shadow: 0 1em 0 -.2em currentcolor;\n\tposition: relative;\n\tanimation: loader-14 0.8s ease-in-out alternate infinite;\n\tanimation-delay: 0.32s;\n\ttop: -1em;\n\t&:after,\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tborder-radius: inherit;\n\t\tbox-shadow: inherit;\n\t\tanimation: inherit;\n\t}\n\t&:before {\n\t\tleft: -1em;\n\t\tanimation-delay: 0.48s;\n\t}\n\t&:after {\n\t\tright: -1em;\n\t\tanimation-delay: 0.16s;\n\t}\n\n    @keyframes loader-14 {\n        0% {\n            box-shadow: 0 2em 0 -.2em currentcolor;\n        }\n        100% {\n            box-shadow: 0 1em 0 -.2em currentcolor;\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-radius: 50%;\n\tbox-shadow: 0 1em 0 -.2em currentcolor;\n\tposition: relative;\n\tanimation: loader-14 0.8s ease-in-out alternate infinite;\n\tanimation-delay: 0.32s;\n\ttop: -1em;\n\t&:after,\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tborder-radius: inherit;\n\t\tbox-shadow: inherit;\n\t\tanimation: inherit;\n\t}\n\t&:before {\n\t\tleft: -1em;\n\t\tanimation-delay: 0.48s;\n\t}\n\t&:after {\n\t\tright: -1em;\n\t\tanimation-delay: 0.16s;\n\t}\n\n    @keyframes loader-14 {\n        0% {\n            box-shadow: 0 2em 0 -.2em currentcolor;\n        }\n        100% {\n            box-shadow: 0 1em 0 -.2em currentcolor;\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader + "{\n                margin: 0 15px 15px 15px;\n                top: -1em;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader + "{\n                margin: 0 15px 15px 15px;\n                top: -1em;\n            }\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader + "{\n                margin: 0 25px 25px 25px;\n                top: -1.1em;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader + "{\n                margin: 0 40px 35px 40px;\n                top: -1.1em;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader + "{\n                margin: 0 65px 50px 65px;\n                top: -1.2em;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader + "{\n                margin: 0 80px 60px 80px;\n                top: -1.2em;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader + "{\n            margin:0 25px;\n        }\n       ";
    }
};
export var LoaderWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1, templateObject_2;
