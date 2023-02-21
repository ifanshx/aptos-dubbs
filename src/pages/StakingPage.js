import React from 'react'
import styled, { keyframes } from "styled-components";
import BG from "../assets/background/2.png";

const StyledStakingPage = styled.section`
  background-size: cover;
  background-position: bottom left;
  overflow: hidden;
  min-height: 100vh;
  min-width: 100vw;
  bottom: 5;
  background-image: url(${BG});
`;

const SelectContainer = styled.div`
position: absolute;
left: calc(0.4em + 1vw);
  top: 16em;
  color: black;
  border: 2px solid ;
  border-radius: 20px;
  align-items: center;
  box-sizing: border-box;
  padding: 10rem 15rem;
  background-color: yellowgreen;
  @media  (max-width: 768px) {
    left: calc(0.4em + 1vw);
  }

  @media  (max-width: 414px) {
    left: calc(0.4em + 1vw);
  }

`;

const ViewContainer = styled.div`
position: absolute;
left: calc(10em + 40vw);
  top: 16em;
  color: black;
  border: 2px solid ;
  border-radius: 20px;
  align-items: center;
  box-sizing: border-box;
  padding: 10rem 18rem;
  background-color: yellowgreen;
  @media (max-width: 48em) {
    width: 80%;
    min-height: 40vh;
    justify-content: center;
  }
`;

const ButtonWallet = styled.button`
  position: absolute;
  left: calc(10rem + 60vw);
  top: 8rem;
  color: black;
  border: 2px solid ;
  border-radius: 20px;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 5rem;
  background-color: whitesmoke;
`
const Adress = styled.div`
  position: absolute;
  left: calc(1rem + 4vw);
  top: 8rem;
  color: black;
  border: 2px solid ;
  border-radius: 20px;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 6rem;
  background-color: whitesmoke;
`

const ContainerStake = styled.div`
  position: absolute;
  left: calc(6rem + 6vw);
  top: 11.7rem;
  color: whitesmoke;
  border: 2px solid ;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 1rem 18rem;
  background-color: black;
`

const StakingPage = () => {
  return (
    <StyledStakingPage>
      <ButtonWallet>CONNECT WALLET</ButtonWallet>
      <Adress>0x47xxxxxx</Adress>
      <ContainerStake><div>TOTAL STAKE : 1,300/2,000</div> <div> | </div> <div>PRESENTASE STAKED : 58,5471%</div></ContainerStake>
      <SelectContainer>
        SELECT YOUR NFT
      </SelectContainer>
      <ViewContainer>
        YOUR NFT
      </ViewContainer>
    </StyledStakingPage>
  )
}

export default StakingPage