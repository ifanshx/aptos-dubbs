import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import BG from "../assets/background/2.png";
// import Roadmap from "../assets/roadmap/KlikRoadmap.png";
import Roadmap from "../assets/roadmap/FULL SCREEN.gif";

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
  z-index: 2;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;




const RoadmapImg= styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  cursor: pointer;
  position: relative;
  

  @media (max-width: 48em) {
    width: 90%;
  } 


`;

export const PopupRoadmap = ({ open, onClose }) => {
  if (!open) return null;


  return (
    <StyledPopup>
      <Background onClick={onClose} />
        <RoadmapImg  onClick={onClose}  src={Roadmap}/>
    </StyledPopup>
  );
};
