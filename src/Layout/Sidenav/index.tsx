import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { WithStyle } from "../../utils";
import { StyledContent, StyledHeader, StyledLogo, StyledNav, Wrapper } from "./styled";
import { Props } from "./types";

const Sidenav:FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
  
  const {navOptions, Logo} = props;

  return (
    <>
      <StyledHeader ref={ref} {...props} id="nav">
        <StyledContent>
            { Logo && 
              <StyledLogo>
                {Logo}
                <hr/>
              </StyledLogo>
            }
            <StyledNav className="links">
            {navOptions && navOptions.map((obj,index)=>{
            return <div key={index}>{obj.option}</div>
            })}
            </StyledNav>
          </StyledContent>
      </StyledHeader>
      <Wrapper>
          <a className="open" href="#nav"><FontAwesomeIcon icon={faBars}/><span>Menu</span></a>
          <a className="close" href="#"><FontAwesomeIcon icon={faTimes}/><span>Close</span></a>
      </Wrapper>
    </>
  );
}));

Sidenav.displayName="Sidenav";
Sidenav.defaultProps={
}

export default Sidenav