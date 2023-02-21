import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../services/dubbs.css";
import { NFT__DATA } from "../assets/data/Data";
import Button from "../components/Button";
import { SMART_CONTRACT_ADDRESS, CANDY_MACHINE_ID, NODE_URL } from "../helper/candyMachineInfo"
import { BuyDubbs } from "../components/BuyDubbs";
import { useWallet } from "@manahippo/aptos-wallet-adapter";
import { AptosClient } from "aptos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  LogoAptos  from "../assets/Icon/Aptos.png"
import ProgressBar from "../components/ProgressBar";

const StyledNotFoundPage = styled.div`
  background-size: cover;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: #F8F8F8;
`;
const Container = styled.div`
  display: flex;
  height: 30rem;
  width: 70rem;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  top: 12%;
  align-items: center;
  justify-content: center;

`;

const Carousel = styled.div`
  display: flex;
  height: 330px;
  width: 330px;
  position: fixed;
  left: 50%;
  top: 5%;
  transform: translate(-50%);




@media (max-width: 48em) {
  height: 200px;
  width: 200px;
}

@media (max-width: 30em) {
  height: 200px;
  width: 200px;
}
`;

const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`


const Text = styled.h1`
  font-size: 100;
  font-weight: 400;
  display: flex;
  font-family: "Barriecito", cursive;
  position: fixed;
  left: 50%;
  top: 80%;
  transform: translate(-50%);

  @media (max-width: 70em) {

}


@media (max-width: 48em) {
  top: 55%;
  font-size: 25px;
}

@media (max-width: 30em) {
  font-size: 20px;
}
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50vw;
  height: 12vh;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  top: 97%;
  @media (max-width: 70em) {
    width: 100vw;

}


@media (max-width: 48em) {
  width: 100vw;
  height: 15vh;
  justify-content: space-around;
  top: 22rem;
}

@media (max-width: 30em) {
  top: 22rem;
  flex-wrap: wrap;
  width: 100vw;
  height: 29vh;
}
`;

const CardOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 20px 20px;
  align-items: flex-end;
`;

const CardTitle = styled.div`
  color: whitesmoke;
  font-size: 20px;
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
  border: 1px solid;
  left: -50px;
  :hover{
    width: 32px;
    height: 32px;
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
  border: 1px solid;
  right: -50px;

  :hover{
    width: 32px;
    height: 32px;
  }
`;

const Aptos = styled.img`
  width: 10%;
  margin: 10px;
`;


const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ContainerText = styled.div`
  font-family: "Barriecito", cursive;
  display: flex;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  top: 77%;

  @media (max-width: 70em) {

}


@media (max-width: 48em) {
  top: 50%;

}

@media (max-width: 30em) {
  top: 52%;
}
  
`
const ContainerBar = styled.div`
  display: flex;
  position: fixed;
  text-align: center;
  font-family: "Barriecito", cursive;
  left: 50%;
  transform: translate(-50%);
  top: 85%;

  @media (max-width: 70em) {

}


@media (max-width: 48em) {
  top: 60%;

}

@media (max-width: 30em) {
  top: 62%;
}
`
const TotalText = styled.h2`


@media (max-width: 70em) {

}


@media (max-width: 48em) {
  font-size: large;

}

@media (max-width: 30em) {
  font-size: larger;
}
`



const DubbsPage = () => {
  const [totalSupply,setTotalSupply] = useState(0);
  const [totalMinted,setTotalMinted] = useState(0);
  const [publicSaleMintPrice, setPublicSaleMintPrice] = useState(0);
  const [totalRoyalty, setRoyalty] = useState(0);
  const [OpenModal, setOpenModal] = useState(false);
  const [data, setData] = useState(NFT__DATA);
  const [Curennt, setCurennt] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [value, setValue] = useState(0);
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


  const aptosClient = new AptosClient(NODE_URL);

  const {
    autoConnect,
    connect,
    disconnect,
    account,
    wallets,
    signAndSubmitTransaction,
    connecting,
    connected,
    disconnecting,
    wallet: currentWallet,
    signMessage,
    signTransaction
  } = useWallet();

  const connectButton = () => {
      return (
        <><Text>SELECT YOUR WALLET FAVORITE</Text>
        <ContainerButton>
          <Button  onClick={() => setOpenModal(true)} >
            CONNECT WALLET
          </Button>
        </ContainerButton>
        </>
      )
  }


  const getDataCandyMachine = async() => {
    const data = await aptosClient.getAccountResources(CANDY_MACHINE_ID);

    for (const resource of data) {
      if(resource.type === `${SMART_CONTRACT_ADDRESS}::candymachine::CandyMachine`){
        setTotalSupply(resource.data.total_supply);
        setTotalMinted(resource.data.minted);
        setPublicSaleMintPrice(resource.data.public_sale_mint_price);
        setRoyalty(resource.data.royalty_points_numerator);
      }
    }
  }

  const mint = async() => {
    if(account?.address || account?.publicKey) {
      const payload = {
        type : "entry_function_payload",
        function : `${SMART_CONTRACT_ADDRESS}::candymachine::mint_script`,
        type_arguments: [],
        arguments : [
          CANDY_MACHINE_ID
        ]
      };

      const transactionRes = await signAndSubmitTransaction(payload);
      await aptosClient.waitForTransaction(transactionRes?.hash || '');
      toast.success(`MINTING SUCCES`);
      // toast.success(`https://explorer.devnet.aptos.dev/txn/${transactionRes?.hash}`);
      await getDataCandyMachine();
    }
  }




  const content = () => {
    getDataCandyMachine()
    return (
      <>
      
      <ContainerText>
        <TotalText>{ totalSupply } SUPLAY - { publicSaleMintPrice/100000000} APT - {totalRoyalty/10}% ROYALTIES</TotalText>
      </ContainerText>
      <ContainerBar>
      <ProgressBar color={"#ff7979"} width={"150px"} value={totalMinted} max={totalSupply}  />

      </ContainerBar>
      <ContainerButton>
       <Button
            id="disconnectBtn"
            onClick={() => {
              disconnect();
            }}>
            DISCONNECT
          </Button>
          <Button
          onClick={mint}
        >
          MINT
        </Button>
      </ContainerButton>
      </>
    )
  }


  return (
    <StyledNotFoundPage>
      <Container>
        <Carousel
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut);}}
          onMouseLeave={() => {setAutoPlay(true);
          }}>
            
          <CarouselWrapper>
            {data.map((item, index) => {
              return (
                <div key={index}className={
                    index == Curennt ? "carousel_card carousel_card-active": "carousel_card"}>
                  <CardImg src={item.image} alt="" />
                  <CardOverlay>
                    <CardTitle> {item.name} </CardTitle>
                  </CardOverlay>
                </div>
              );
            })}
            <ArrowLeft onClick={slideLeft}>&lsaquo;</ArrowLeft>
            <ArrowRight onClick={slideRight}>&rsaquo;</ArrowRight>
          </CarouselWrapper>
        </Carousel>
        
        { (connected && account) ? content() : connectButton() }
      </Container>
      
      <BuyDubbs open={OpenModal} onClose={() => setOpenModal(false) }/>
    </StyledNotFoundPage>
  );
};

export default DubbsPage;
