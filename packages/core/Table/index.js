var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { StyledTable, StyledTbody, StyledTd, StyledTh, StyledThead, StyledTr } from './styled';
var Table = React.memo(React.forwardRef(function (props, ref) {
    var thData = props.thData, tdData = props.tdData;
    return (React.createElement(StyledTable, __assign({ ref: ref }, props),
        React.createElement(StyledThead, null,
            React.createElement(StyledTr, __assign({}, props), thData && thData.map(function (th) { return React.createElement(StyledTh, __assign({ key: th.id }, props), th.data); }))),
        React.createElement(StyledTbody, null, tdData && tdData.map(function (tr) { return React.createElement(StyledTr, __assign({ key: tr.trId }, props),
            " ",
            tr.trData.map(function (td) { return React.createElement(StyledTd, __assign({ key: td.tdId }, props), td.tdData); }),
            " "); }))));
}));
Table.displayName = "Table";
Table.defaultProps = {
// hoverEffect: false
};
export default Table;
