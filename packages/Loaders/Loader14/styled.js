var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Loader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-right: .1em solid currentcolor;\n\tborder-radius: 100%;\n\tanimation: loader-37 800ms linear infinite;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\twidth: .8em;\n\t\theight: .8em;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: calc(50% - .4em);\n\t\tleft: calc(50% - .4em);\n\t\tborder-left: .08em solid currentcolor;\n\t\tborder-radius: 100%;\n\t\tanimation: loader-37 400ms linear infinite reverse;\n\t}\n\t&:after {\n\t\twidth: .6em;\n\t\theight: .6em;\n\t\ttop: calc(50% - .3em);\n\t\tleft: calc(50% - .3em);\n\t\tborder: 0;\n\t\tborder-right: .05em solid currentcolor;\n\t\tanimation: none;\n\t}\n\n    @keyframes loader-37 {\n        from {\n            transform: rotate(360deg);\n        }\n        to {\n            transform: rotate(0deg);\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-right: .1em solid currentcolor;\n\tborder-radius: 100%;\n\tanimation: loader-37 800ms linear infinite;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\twidth: .8em;\n\t\theight: .8em;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: calc(50% - .4em);\n\t\tleft: calc(50% - .4em);\n\t\tborder-left: .08em solid currentcolor;\n\t\tborder-radius: 100%;\n\t\tanimation: loader-37 400ms linear infinite reverse;\n\t}\n\t&:after {\n\t\twidth: .6em;\n\t\theight: .6em;\n\t\ttop: calc(50% - .3em);\n\t\tleft: calc(50% - .3em);\n\t\tborder: 0;\n\t\tborder-right: .05em solid currentcolor;\n\t\tanimation: none;\n\t}\n\n    @keyframes loader-37 {\n        from {\n            transform: rotate(360deg);\n        }\n        to {\n            transform: rotate(0deg);\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader + "{\n                margin: 0 2px 2px 2px;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader + "{\n                margin: 0 3px 3px 3px;\n            }\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader + "{\n                margin: 0 5px 5px 5px;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader + "{\n                margin: 0 5px 5px 5px;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader + "{\n                margin: 0 10px 10px 10px;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader + "{\n                margin: 0 10px 10px 10px;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader + "{\n            margin: 0 3px 3px 3px;\n        }\n       ";
    }
};
export var LoaderWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.display ? 'inline-block' : 'none'; });
var templateObject_1, templateObject_2;
