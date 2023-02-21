import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logog from "../assets/Icon/Logo Tengah.png";

import { Popup } from "./Popup";


import Twitter from "../assets/Icon/Twitter.png";
import Discord from "../assets/Icon/Discord.png";


const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarContainer = styled.div`
  width: 80%;
  height: 70px;
  display: flex;
  border: 4px solid;
  color: whitesmoke;
  background-color: rgb(16,23,35);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;


  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavbarLink = styled(Link)`
  color: whitesmoke;
  font-family: "Barriecito", cursive;
  margin: 55px;

  :hover {
    text-decoration: underline;

  }

  @media (max-width: 1280px) {
    margin: 30px;
  }

  @media (max-width: 890px) {
    margin: 20px;
  }

  @media (max-width: 768px) {
    display: none;
    margin: 20px;
  }
`;

const MobileNav = styled.div`
    display: none;
  @media (max-width: 768px) {
  width: 100%;
  height: 65px;
  display: flex;
  /* background-color: wheat; */
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  }
`
const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;


const Logo = styled.img`
  width: 5rem;
  height: 5rem;
`;

const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  width: 2rem;
  height: 1.5rem;
  justify-content: space-between;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

`
const Line = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: var(--text-primary);
`;

const IconTwit = styled.img`
width: 3vw;
margin: 7%;
cursor: pointer;
:hover{
  width: 3.4vw;
}
`


const IconDisc = styled.img`
width: 3vw;
margin: 7%;
cursor: pointer;

:hover{
  width: 3.4vw;
}
`

const NavBar2 = () => {
  const [OpenModal, setOpenModal] = useState(false);
  const clickRedirection = (e) => {
    const urls = [
      "https://twitter.com/dubbsNFT","https://discord.gg/FxTMucwsVN"
    ];
    window.open(urls[parseInt(e.target.id)], "_blank").focus();
  };

  return (
    <StyledNavbar>
      <NavbarContainer>
          <NavbarLinkContainer>
          <IconTwit  id="0" onClick={clickRedirection}  src={Twitter}  />
            <NavbarLink >STAKING</NavbarLink>
            <NavbarLink to="/team">TEAM</NavbarLink>
            <NavbarLink to="/">HOME</NavbarLink>
            <NavbarLink to="/mint"> MINT DEVNET</NavbarLink>
            <NavbarLink to="/roadmap">ROADMAP</NavbarLink>
            <IconDisc  id="1" onClick={clickRedirection}  src={Discord}  />
          </NavbarLinkContainer>
      </NavbarContainer>
      <MobileNav>
      <LeftContainer>
      <Logo src={Logog}/>
      </LeftContainer>
      <RightContainer>
      <Hamburger  onClick={() => setOpenModal(true) } >
          <Line />
          <Line />
          <Line />
      </Hamburger>
      <Popup open={OpenModal} onClose={() => setOpenModal(false) } />
      </RightContainer>
      </MobileNav>
    </StyledNavbar>
  );
}


export default NavBar2