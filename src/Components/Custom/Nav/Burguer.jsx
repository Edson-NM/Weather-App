import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  transition: all 0.2s linear;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burguer = ({ handleViewByCity, handleViewByLocation }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledBurguer open={open} onClick={() => handleOpen()}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurguer>
      <RightNav
        handleViewByCity={handleViewByCity}
        handleViewByLocation={handleViewByLocation}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Burguer;
