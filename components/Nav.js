import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Nav() {
  return (
    <Navbar>
      <Link href="/">
        <img src="/images/navbar/logo.png" alt="nav-logo" />
      </Link>
      <div className="nav-links">
        <p>Membership</p>
        <p>About Us</p>
        <p>Events</p>
        <p>Major Reports</p>
        <p>Contact Us</p>
        <button>Members Portal</button>
        <div className="burger-container">
          <img src="images/navbar/burger.svg" alt="burger" className="burger" />
        </div>
      </div>
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
  img {
    cursor: pointer;
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;
    cursor: pointer;
    button {
      cursor: pointer;
      background: #163f67;
      color: white;
      padding: 0.25rem 1rem;
      border-radius: 5px;
      border: 1px solid #163f67;
      transition: 0.2s all ease-in;
    }
    button:hover {
      background-color: #51b4b2;
      border-color: #51b4b2;
    }
    p:hover {
      color: #51b4b2;
    }
  }
  .burger-container {
    img {
      display: none;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 1024px) {
    .nav-links {
      display: none;
    }
  }
`;
