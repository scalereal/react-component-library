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
import * as Styled from './List.styled';
var List = React.memo(React.forwardRef(function (props, ref) { return (React.createElement(Styled.ListStyled, __assign({ ref: ref }, props), React.Children.map(props.children, function (c, i) {
    return React.createElement("li", { key: i }, c);
}))); }));
List.displayName = 'List';
List.Style = Styled.ListStyled;
List.defaultProps = {
    variant: 'vertical'
};
export default List;
