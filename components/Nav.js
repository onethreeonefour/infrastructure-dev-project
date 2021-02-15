import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <Navbar>
      <img src="images/navbar/logo.png" alt="nav-logo" />
      <img src="images/navbar/burger.svg" alt="burger" className="burger" />
    </Navbar>
  );
}

export default Nav;
const Navbar = styled.nav`
  width: 100%;
  display: flex;
  background: white;
  gap: 1rem;
  padding: 1rem 3rem;
  .burger {
    margin-left: auto;
    cursor: pointer;
  }
`;
