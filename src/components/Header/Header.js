import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import logo from "../../assets/logo.png";
import resume from "../../assets/Resume.pdf";
const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src={logo}
            alt="logo"
            borderRadius="50%"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
        <a
          className="downloadresumebtn"
          style={{
            background: "#ffffff",
            color: "black",
            padding: "10px 15px",
            borderRadius: "99px",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            fontWeight: 400,
            outline: "none",
            textDecoration: "none",
            display: "inline-block"
          }}
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>

        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
