import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BG from "../assets/background/2.png";
import TWITTER from "../assets/Icon/Twitter.png";
import DISCORD from "../assets/Icon/Discord.png";

// import { useSpring } from 'react-spring';

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  z-index: 1;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  width: 600px;
  padding: 4rem;
  background-color: #f8f8f8;
  border-radius: 1rem;
  border: 2px solid var(--plain-shadow);
  box-shadow: 0 0.3rem 0 0 var(--plain-shadow);
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--plain-dark);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const NavbarLink = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Icon = styled.img`
  display: flex;
  justify-content: space-around;
  width: 20%;
  margin: 4%;
  cursor: pointer;
`;

export const Popup = ({ open, onClose }) => {
  if (!open) return null;

  const clickRedirection = (e) => {
    const urls = [
      "https://twitter.com/dubbsNFT",
      "https://discord.gg/FxTMucwsVN",
    ];
    window.open(urls[parseInt(e.target.id)], "_blank").focus();
  };

  return (
    <StyledPopup>
      <Background onClick={onClose} />

      <Container onClick={onClose}>
        <NavbarLink onClick={onClose} to="/">
          STAKING
        </NavbarLink>
        <NavbarLink onClick={onClose} to="/team">
          TEAM
        </NavbarLink>
        <NavbarLink onClick={onClose} to="/">
          HOME
        </NavbarLink>
        <NavbarLink onClick={onClose} to="/mint">
          MINT
        </NavbarLink>
        <NavbarLink onClick={onClose} to="/roadmap">
          ROADMAP
        </NavbarLink>
        <br />
        <ContainerIcon>
          <Icon
            alt=""
            className="twitter"
            id="0"
            onClick={clickRedirection}
            src={TWITTER}
          />
          <Icon
            alt=""
            className="discord"
            id="1"
            onClick={clickRedirection}
            src={DISCORD}
          />
        </ContainerIcon>
      </Container>
    </StyledPopup>
  );
};
