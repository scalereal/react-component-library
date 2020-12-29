var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { cardTableTheme } from '../../theme/core/cardTable';
import { tableTheme } from '../../theme/core/table';
export var StyledThead = styled.thead(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n"], ["\n\n"])));
export var StyledTh = styled.th(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: ", ";\n    color: ", ";\n"], ["\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: ", ";\n    color: ", ";\n"])), function (pr) { return pr.thBgColor || tableTheme.defaults.thBgColor; }, function (pr) { return pr.thTextColor || tableTheme.defaults.thTextColor; });
export var StyledTr = styled.tr(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    &:nth-child(even){background-color: ", ";};\n    /* &:hover {background-color:#ddd;} */\n    ", "\n"], ["\n    &:nth-child(even){background-color: ", ";};\n    /* &:hover {background-color:#ddd;} */\n    ", "\n"])), function (pr) { return pr.nthTrBgColor || tableTheme.defaults.nthTrBgColor; }, function (pr) { return pr.hoverEffect ? "&:hover {background-color:" + (pr.hoverTrBgColor || tableTheme.defaults.hoverTrBgColor) + ";" : ''; });
export var StyledTbody = styled.tbody(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\n"], ["\n\n"])));
export var StyledTd = styled.td(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\n"], ["\n\n"])));
export var StyledTable = styled.table(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-family: Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 90%;\n    margin:auto;\n    ", ",", "{\n        border: 1px solid ", ";\n        padding: 8px;\n    }\n"], ["\n    font-family: Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 90%;\n    margin:auto;\n    ", ",", "{\n        border: 1px solid ", ";\n        padding: 8px;\n    }\n"])), StyledTd, StyledTh, function (pr) { return pr.borderColor || cardTableTheme.defaults.borderColor; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
