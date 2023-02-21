import React, { useState } from "react";
import styled from "styled-components";
import Roadmap from "../assets/roadmap/roadmap.png"
import { PopupRoadmap } from "../components/PopupRoadmap";
import Button from "../components/Button";

const Container = styled.div`
  background-size: cover;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: #F8F8F8;
`


const Hero = styled.div`
  .Roadmap {
    position: fixed;
    width: 50%;
    left: 50%;
    top: 20%;
    transform: translate(-50%);
    cursor: pointer;
    @media (max-width: 48em) {
    width: 90%;
    left: 50%;
    top: 20%;
    transform: translate(-50%);
    justify-content: center;
  }
  }


`;

const ContainerButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 50vw;
  min-height: 12vh;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  top: 85%;
  @media (max-width: 48em) {
    width: 90%;
    left: 50%;
    top: 60%;
    transform: translate(-50%);
    justify-content: center;
  }
`;


const RoadmapPage = () => {
  const [OpenModal, setOpenModal] = useState(false);
  const clickRedirection = (e) => {
    const urls = [
      "https://docs.aptosdubbs.xyz/"
    ];
    window.open(urls[parseInt(e.target.id)], "_blank").focus();
  };

  return (<>
    <Container>
        <Hero>
        <img className="Roadmap" alt="AP" src={Roadmap} onClick={() => setOpenModal(true)} />
      </Hero>
      <ContainerButton>
      <Button id="0" onClick={clickRedirection} >READ WHITEPAPER</Button>
      </ContainerButton>
    </Container>
    <PopupRoadmap  open={OpenModal} onClose={() => setOpenModal(false) }  />
    </>
  )
}

export default RoadmapPage