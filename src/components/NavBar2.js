import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";



import TWITTER from "../assets/Icon/Twitter.png"
import DISCORD from "../assets/Icon/Discord.png"
// import LOGO from "../assets/Icon/Logo Tengah.png"



const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;

`;

const rotate = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 150% 50%;
    }
`;

const Container = styled.div`
  left: 1%;
  right: 0;
  top: 0;
  color: whitesmoke;
  bottom: auto;
  position: fixed;
  border: 2px solid ;
  border-radius: 20px;
  margin: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem 4rem;
  
  background-color: black;
  z-index: 5;
  &:hover {
    img {
      transform: translateY(0.1rem) scale(1.1);
    }
  }

  img{
    width: 100%;
    height: auto;
  }
    .twitter{
      width: 5%;

      cursor: pointer;
    }
    .discord{
      width: 5%;
      cursor: pointer;
    }



  @media  (max-width: 768px) {
    padding: 10px 20px;
    font-size: 1rem;
  }

  @media  (max-width: 414px) {
    padding: 7px 2px;
    font-size: 0.8rem;
  }
`;

const Title = styled.h2`
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: whitesmoke;


  @media  (max-width: 768px) {
    font-size: 0.7rem;
  }
  
  @media  (max-width: 414px) {
    font-size: 0.5rem;
  }

`

export const NavBar = () => {

  const clickRedirection = (e) => {
    const urls = ["https://twitter.com/dubbsNFT",
    "https://discord.gg/FxTMucwsVN"];
    window.open(urls[parseInt(e.target.id)], '_blank').focus();
  };

  return (
    <StyledNavbar>
      <Container>
      <img alt='' className="twitter" id="0" onClick={clickRedirection} src={TWITTER}/> 
      <Link to="/"><Title>STAKING</Title></Link>
      <Link to="/team"><Title>TEAM</Title></Link>
      {/* <img alt='' className="logo" src={LOGO}/> */}       <Link to="/" ><Title>HOME</Title></Link>
      <Link to="/dubbs"><Title>$DUBBS</Title></Link>
      <Link to="/roadmap"><Title>ROADMAP</Title></Link>
      <img alt='' className="discord" id="1" onClick={clickRedirection} src={DISCORD}/>
      </Container>
    </StyledNavbar>
  )
}
