var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { radioTheme } from '../../theme/core/radio';
export var ErrorLabel = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display:block;\n    color: ", ";\n    padding:0.5rem 0.3rem;\n"], ["\n    display:block;\n    color: ", ";\n    padding:0.5rem 0.3rem;\n"])), radioTheme.defaults.errorTextColor);
export var StyledLi = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width:auto;\n    padding-right:1.5rem;\n"], ["\n    width:auto;\n    padding-right:1.5rem;\n"])));
export var StyledUl = styled.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display:flex;\n    flex-direction:row;\n    margin:0;\n    padding:0.3rem;\n    list-style:none;\n    ", "\n"], ["\n    display:flex;\n    flex-direction:row;\n    margin:0;\n    padding:0.3rem;\n    list-style:none;\n    ",
    "\n"])), function (pr) {
    return pr.display === 'block' ? "flex-direction:column;" + StyledLi + "{\n        width:100%;\n        }" : '';
});
export var RadioGroupWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", ";\n\n"], ["\n    ", ";\n\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; });
export var StyledWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    \n"], ["\n    \n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
