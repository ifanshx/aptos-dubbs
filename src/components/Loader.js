import React from "react";
import styled from "styled-components";
import LOADING from "../assets/Icon/Loading.png";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(4px);

  .loading {
    position: absolute;
    width: 350px;
    height: 350px;
    -webkit-animation: blink-animation 0.7s steps(5, start) infinite;
    animation: blink-animation 0.6s steps(5, start) infinite;
  }
  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
`;

const Loader = () => {
  return (
    <Container>
      <img alt="" className="loading" src={LOADING} />
    </Container>
  );
};

export default Loader;
