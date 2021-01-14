var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Loader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    border: 1px solid currentcolor;\n    animation: 1s loader-01 linear infinite;\n    position:relative;\n    &:before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tposition: absolute;\n\t\t/* top: -.2em; */\n\t\tleft: 50%;\n\t\tborder: .2em solid currentcolor;\n\t\tborder-radius: 50%;\n\t}\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    border: 1px solid currentcolor;\n    animation: 1s loader-01 linear infinite;\n    position:relative;\n    &:before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tposition: absolute;\n\t\t/* top: -.2em; */\n\t\tleft: 50%;\n\t\tborder: .2em solid currentcolor;\n\t\tborder-radius: 50%;\n\t}\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            ";
        case "XS":
            return "font-size: 1rem;\n            ";
        case "S":
            return "font-size: 2rem;\n           ";
        case "M":
            return "font-size: 3rem;\n            ";
        case "L":
            return "font-size: 5rem;\n           ";
        case "XL":
            return "font-size: 6rem;\n            ";
        default:
            return "font-size: 1rem;\n        ";
    }
};
export var LoaderWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        \n    }\n"], ["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        \n    }\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; }, Loader);
var templateObject_1, templateObject_2;
