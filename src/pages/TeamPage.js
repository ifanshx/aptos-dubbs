import React from "react";
import styled from "styled-components";
import Countainer1 from ".././assets/team/Rectangle 1.png"
import Countainer2 from ".././assets/team/Rectangle 2.png"
import Countainer3 from ".././assets/team/Rectangle 3.png"
import Profil1 from ".././assets/team/Neighborhoodz 1 1.png"
import Profil2 from ".././assets/team/Neighborhoodz 1 1 (2).png"
import Profil3 from ".././assets/team/Neighborhoodz 1 1 (1).png"

const StyledTeamPage = styled.section`
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-y: scroll;
  background-color: #F8F8F8;

`;

const HeaderContainer = styled.div`
  width: 80vw;
  height: 75vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  left: 50%;
  top: 15%;
  /* background-color: #F8F8F8; */
  transform: translate(-50%);


  @media (max-width: 48em) {
    top: 10%;
    justify-content: center;
      flex-wrap: wrap;
  }
`;

const CountainerImg = styled.img`
  width: 300px;
  height: 480px;
display: flex;
align-items: center;

`
const ProfilImg = styled.img`
display: flex;
position: absolute;
top: 7%;
width: 60%;
cursor: pointer;
:hover{
transform: scale(1.1);
}
`

const Container = styled.div`

justify-content: center;
position: relative;
display: flex;
  width: 320px;
  height: 460px;
  border-radius: 5%;
  margin: 40px;
  @media (max-width: 768px) {
    margin-top: 1px;
    /* margin-bottom: auto; */

  }
`




const TeamPage = () => {
  const clickRedirection = (e) => {
    const urls = [
      "https://twitter.com/artnesh",
      "https://twitter.com/ifanshx",
      "https://twitter.com/dubbsNFT",
    ];
    window.open(urls[parseInt(e.target.id)], "_blank").focus();
  };

  return (
    <StyledTeamPage>
      <HeaderContainer>
        <Container>
        <CountainerImg src={Countainer1} />
        <ProfilImg id='0' onClick={clickRedirection} className="profil1" src={Profil1} />
        </Container>
        <Container>
        <CountainerImg src={Countainer2} />
        <ProfilImg id='1' onClick={clickRedirection}  className="profil2" src={Profil2} />
        </Container>
        <Container>
        <CountainerImg src={Countainer3} />
        <ProfilImg id='3' onClick={clickRedirection}  className="profil3" src={Profil3} />
        </Container>
      </HeaderContainer>
    </StyledTeamPage>
  );
};

export default TeamPage;
