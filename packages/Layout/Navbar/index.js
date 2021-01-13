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
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { NavButton, StyledHeader, StyledLogo, StyledNav } from "./styled";
var Navbar = React.memo(React.forwardRef(function (props, ref) {
    var navOptions = props.navOptions, Logo = props.Logo;
    var _a = useState(false), isNavVisible = _a[0], setNavVisibility = _a[1];
    var _b = useState(false), isSmallScreen = _b[0], setIsSmallScreen = _b[1];
    var handleMediaQueryChange = function (mediaQuery) {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        }
        else {
            setIsSmallScreen(false);
        }
    };
    useEffect(function () {
        var mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        return function () {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    var toggleNav = function () {
        setNavVisibility(!isNavVisible);
    };
    return (React.createElement(StyledHeader, __assign({ ref: ref }, props),
        Logo &&
            React.createElement(StyledLogo, null, Logo),
        React.createElement(CSSTransition, { in: !isSmallScreen || isNavVisible, timeout: 350, classNames: "NavAnimation", unmountOnExit: true },
            React.createElement(StyledNav, __assign({}, props), navOptions && navOptions.map(function (obj) {
                return obj.option;
            }))),
        React.createElement(NavButton, { onClick: toggleNav, className: "Burger" },
            React.createElement(FontAwesomeIcon, { icon: faBars }))));
}));
Navbar.displayName = "Navbar";
Navbar.defaultProps = {};
export default Navbar;
