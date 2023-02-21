import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NFT__DATA } from "../assets/data/Data";
import Footer from "../components/Footer";

const StyledHomePage = styled.div`
    background-size: cover;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: #F8F8F8;
`;

const ContainerTitle = styled.div`
  left: 50%;
  transform: translate(-50%);
  top: 15%;
  justify-content: center;
  display: flex;
  position: fixed;
  height: 5rem;
  width: 40rem;
  /* background-color: red; */
  /* display: none; */
  
  @media (max-width: 70em) {
    left: 50%;
  top: 15%;
}


@media (max-width: 48em) {
  /* font-size: 50px; */
  left: 50%;
  top: 15%;
}

@media (max-width: 30em) {
  top: 17%;
  left: 50%;
}
`

const Title = styled.h1`
  font-family: "Barriecito", cursive;
  font-size: 50px;

  @media (max-width: 70em) {

font-size: 40px;
}


@media (max-width: 48em) {

  font-size: 50px;
}

@media (max-width: 30em) {
  font-size: 35px;
}
`


const Container = styled.div`
  display: flex;
  height: 30rem;
  width: 70rem;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  top: 15%;
  align-items: center;
  justify-content: center;

  /* background-color: rebeccapurple; */
`;

const Carousel = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  position: fixed;
  left: 78%;
  top: 15%;
  transform: translate(-50%);


  @media (max-width: 70em) {

    display: flex;
  height: 350px;
  width: 350px;
  position: fixed;
  left: 70%;
  top: 11%;
  transform: translate(-50%);
  
}


@media (max-width: 48em) {

  height: 250px;
  width: 250px;
  left: 60%;
  justify-content: center;
  top: 16%;
  transform: translate(-50%);
  
}

@media (max-width: 30em) {

  height: 180px;
  width: 180px;
  left: 60%;
  justify-content: center;
  top: 26%;
  transform: translate(-50%);
  
}



`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 80%;


`;

const CardId = styled.div`
  position: fixed;
  top: 84%;
  left: 70%;
  align-items: center;


  @media (max-width: 70em) {
    display: flex;
  top: 72%;
  left: 67%;
  transform: translate(-50%);
  font-size: large;
}


@media (max-width: 48em) {
  display: flex;
  top: 61%;
  left: 60%;
  transform: translate(-50%);
  font-size: small;
}

@media (max-width: 30em) {
  display: flex;
  top: 59%;
  left: 60%;
  transform: translate(-50%);
  font-size: 10px;
}

`;

const Id = styled.h3`
  font-family: "Barriecito", cursive;

`;

const NameTitle = styled.h2`
  font-family: "Barriecito", cursive;

  
  @media (max-width: 70em) {
    font-size: 30px;
  font-weight: 100;
}


@media (max-width: 48em) {
  font-size: 20px;
  font-weight: 100;
}

@media (max-width: 30em) {
  font-size: 15px;
  font-weight: 100;
}


  
`;
const CardAtribut = styled.div`
  position: fixed;
  top: 16%;
  left: 15%;
  width: 400px;

  @media (max-width: 70em) {
    justify-content: center;
  left: 40%;
  top: 10%;
  transform: translate(-50%);
}


@media (max-width: 48em) {
  justify-content: center;
  left: 47%;
  top: 15%;
  transform: translate(-50%);
}

@media (max-width: 30em) {
  justify-content: center;
  left: 52%;
  top: 23%;
  transform: translate(-50%);
}


`;

const Atribut = styled.div`
  font-size: 20px;
  font-weight: 100;
  font-family: "Barriecito", cursive;


  @media (max-width: 48em) {
    font-size: 12px;
  font-weight: 100;
  }
`;

const ArrowLeft = styled.div`
  position: absolute;
  font-size: 40px;
  top: 50%;
  transform: translate(0, -50%);
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-bottom: 0;
  padding-top: 2%;
  cursor: pointer;
  border: 2px solid;
  color: black;
  left: -50px;


  @media (max-width: 70em) {

}


@media (max-width: 48em) {
  display: flex;
  font-size: 20px;
  top: 113%;
  left: 10%;
  transform: translate(0, -40%);
  width: 20px;
  height: 20px;
}

@media (max-width: 30em) {
  font-size: 15px;
  width: 15px;
  height: 15px;
  border: 1px solid;
}

`;

const ArrowRight = styled.div`
  position: absolute;
  font-size: 40px;
  top: 50%;
  transform: translate(0, -50%);
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-bottom: 0;
  padding-top: 2%;
  cursor: pointer;
  border: 2px solid;
  color: black;
  right: -50px;

  @media (max-width: 70em) {

}


@media (max-width: 48em) {
  display: flex;
  font-size: 20px;
  top: 113%;
  left: 80%;
  transform: translate(0, -40%);
  width: 20px;
  height: 20px;
}

@media (max-width: 30em) {
  font-size: 15px;
  width: 15px;
  height: 15px;
  border: 1px solid;
}

`;

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ThumbsWrapper = styled.div`
  width: 900px;
  /* border: 5px solid #333; */
  padding: 4px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: scroll;
  position: fixed;
  left: 50%;
  top: 90%;
  transform: translate(-50%);
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 1%;
  }

  ::-webkit-scrollbar-track {
    background-color: white;
  }

  ::-webkit-scrollbar-thumb {
    background-color: black;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: salmon;
  }



  @media (max-width: 70em) {
    display: flex;
  left: 50%;
  top: 80%;
  width: 700px;
  transform: translate(-50%);
  
  }
  

  @media (max-width: 48em) {
    display: flex;
  left: 50%;
  top: 80%;
  width: 450px;
  transform: translate(-50%);
  
  }

  @media (max-width: 30em) {
  display: flex;
  left: 50%;
  top: 80%;
  width: 300px;
  transform: translate(-50%);
  }
`;

const Thumbs = styled.div`
  display: flex;
`;

const Item = styled.div`
  display: flex;
  background-color: aliceblue;
`;

const ThumbsImg = styled.img`
  width: 60px;
  height: 60px;
  padding: 4px;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    border: 1px solid;
  }
`;

const HomePage = () => {
  const [data, setData] = useState(NFT__DATA);
  const [Curennt, setCurennt] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 13000);
  });

  const slideRight = () => {
    setCurennt(Curennt === data.length - 1 ? 0 : Curennt + 1);
  };

  const slideLeft = () => {
    setCurennt(Curennt === 0 ? data.length - 1 : Curennt - 1);
  };

  return (
    <StyledHomePage>
      <ContainerTitle>
        <Title>Welcome To Aptos Dubbs</Title>
      </ContainerTitle>
      <Container>
        <div
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
          }}
        >
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Carousel>
                  <CarouselWrapper>
                    <div
                      className={
                        index === Curennt
                          ? "carousel_card carousel_card-active"
                          : "carousel_card"
                      }
                    >
                      <CardImg src={item.image} alt="" />
                    </div>

                    <ArrowLeft onClick={slideLeft}>&lsaquo;</ArrowLeft>
                    <ArrowRight onClick={slideRight}>&rsaquo;</ArrowRight>
                  </CarouselWrapper>
                </Carousel>
                <CardId>
                  <Id
                    className={
                      index === Curennt ? " atribut-active" : "atribut"
                    }
                  >
                    - {item.id} / 200 -{" "}
                  </Id>
                </CardId>
                <CardAtribut>
                  <NameTitle
                    className={
                      index === Curennt ? " atribut-active" : "atribut"
                    }
                  >
                    {" "}
                    {item.name}{" "}
                  </NameTitle>
                  {item.atributes.map((atribut, i) => {
                    return (
                     
                        <Atribut
                        key={i}
                          className={
                            index === Curennt ? " atribut-active" : "atribut"
                          }
                        >
                          <li>
                            {atribut.trait_type} : {atribut.value}
                          </li>
                        </Atribut>
                      
                    );
                  })}
                </CardAtribut>
              </div>
            );
          })}

          <ThumbsWrapper>
            <Thumbs>
              {data.map((_, index) => {
                return (
                  <Item key={index}>
                    <ThumbsImg
                      onClick={() => setCurennt(index)}
                      src={_.image}
                      alt=""
                    />
                  </Item>
                );
              })}
            </Thumbs>
          </ThumbsWrapper>
        </div>
      </Container>
    </StyledHomePage>
  );
};

export default HomePage;
