import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  background-color: #0d2538;
  position: fixed;
  color: #fff;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding-top: 4rem;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  font-weight: none;

  @media (min-width: 450px) {
    width: 90%;
    opacity: 0.98;
  }

  @media (min-width: 1024px) {
    width: 20%;
  }

  li {
    padding: 18px 10px;
    font-weight: bold;
    :hover,
    :focus {
      background-color: #000;
      cursor: pointer;
    }
  }

  span {
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.3s;

    :hover,
    :focus {
      background-size: 100% 2px;
    }
  }
`;

const RightNav = ({
  open,
  setOpen,
  handleViewByCity,
  handleViewByLocation,
}) => {
  return (
    <Ul open={open}>
      <li onClick={() => handleViewByCity(true, setOpen(!open))}>
        <span>Search weather by City</span>
      </li>
      <li onClick={() => handleViewByLocation(true, setOpen(!open))}>
        <span>Search weather by ubication</span>
      </li>
    </Ul>
  );
};

export default RightNav;
