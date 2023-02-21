import React from "react";
import styled, { keyframes } from "styled-components";

import DUBBS from "../assets/home/Dubbies Tengah.png";
import BG from "../assets/background/2.png";

const StyledNotFoundPage = styled.div`
  background-size: cover;
  background-position: bottom right;
  overflow: hidden;
  min-height: 100vh;
  min-width: 100vw;
  bottom: 5;
  background-image: url(${BG});
`;

const PageTitle = styled.div`
    color: #000000;
    font-size: 48px;
    font-family: 'Poppins';
    font-weight: 700;
    line-height: 140%;
    margin-bottom: 8px;
    @media screen and (max-width: 1020px) {
        font-size: 32px;
    }
`
const PageSubTitle = styled.div`
    color: rgba(60, 60, 67, 0.85);
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 70px;
`

const PageConter = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 750px;
    height: 320px;

    background-color: saddlebrown;
    transform: translate(-50%, -50%);
    background: url('') no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1020px) {
        width: 90%;
    }
`

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
                  <PageConter>
                    <PageTitle>Page not Found</PageTitle>
                    <PageSubTitle>Sorry, the page is restricted in your country or area.</PageSubTitle>
                  </PageConter>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;

