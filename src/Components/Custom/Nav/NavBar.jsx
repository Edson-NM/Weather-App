import React from "react";
import styled from "styled-components";
import Burguer from "./Burguer";

const Nav = styled.nav`
  width: 40%;
  height: 20%;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px;
  }
`;

const NavBar = ({ handleViewByCity, handleViewByLocation }) => {
  return (
    <Nav>
      <Burguer
        handleViewByCity={handleViewByCity}
        handleViewByLocation={handleViewByLocation}
      />
    </Nav>
  );
};

export default NavBar;
