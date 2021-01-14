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
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { StyledContent, StyledHeader, StyledLogo, StyledNav, Wrapper } from "./styled";
var Sidenav = React.memo(React.forwardRef(function (props, ref) {
    var navOptions = props.navOptions, Logo = props.Logo;
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledHeader, __assign({ ref: ref }, props, { id: "nav" }),
            React.createElement(StyledContent, null,
                Logo &&
                    React.createElement(StyledLogo, null,
                        Logo,
                        React.createElement("hr", null)),
                React.createElement(StyledNav, { className: "links" }, navOptions && navOptions.map(function (obj, index) {
                    return React.createElement("div", { key: index }, obj.option);
                })))),
        React.createElement(Wrapper, null,
            React.createElement("a", { className: "open", href: "#nav" },
                React.createElement(FontAwesomeIcon, { icon: faBars }),
                React.createElement("span", null, "Menu")),
            React.createElement("a", { className: "close", href: "#" },
                React.createElement(FontAwesomeIcon, { icon: faTimes }),
                React.createElement("span", null, "Close")))));
}));
Sidenav.displayName = "Sidenav";
Sidenav.defaultProps = {};
export default Sidenav;
