import { useWallet } from "@manahippo/aptos-wallet-adapter";
import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { AptosClient } from "aptos";

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
  z-index: 3;
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
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const ContainerButton = styled.div`
display: flex;
flex-direction: column;
`





export const BuyDubbs = ({ open, onClose }) => {
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
        signTransaction,
      } = useWallet();

  if (!open) return null;

  

  const connectButton = () => {
    return wallets.map((wallet) => {
      const option = wallet.adapter;
      return (
        <Button
          onClick={() => {
            connect(option.name).then(() => {
              const elements =
                document.getElementsByClassName("modal-backdrop");
              console.log(elements);
              while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
              }
            });
          }}
          id={option.name.split(" ").join("_")}
          key={option.name}
          className="wallet-adapter-list d-flex align-items-center"
        >
          {option.name}
        </Button>
      );
    });
  };

  return (
    <StyledPopup>
      <Background onClick={onClose} />
      <Container onClick={onClose}>
        <ContainerButton>
        {connectButton()}
        </ContainerButton>
      </Container>
    </StyledPopup>
  );
};
