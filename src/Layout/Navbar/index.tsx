import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { WithStyle } from "../../utils";
import { NavButton, StyledHeader, StyledLogo, StyledNav } from "./styled";
import { Props } from "./types";

const Navbar:FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
  const {navOptions,Logo} = props;

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMediaQueryChange = (mediaQuery:any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addEventListener("change",handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change",handleMediaQueryChange);
    };

  }, []);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <StyledHeader ref={ref} {...props}>
      { Logo && 
        <StyledLogo>
          {Logo}
        </StyledLogo>
      }
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <StyledNav {...props}>
          {navOptions && navOptions.map(obj=>{
            return obj.option
          })}
        </StyledNav>
      </CSSTransition>
      <NavButton onClick={toggleNav} className="Burger">
        <FontAwesomeIcon icon={faBars} />
      </NavButton>
    </StyledHeader>
  );
}));

Navbar.displayName="Navbar";
Navbar.defaultProps={
}

export default Navbar