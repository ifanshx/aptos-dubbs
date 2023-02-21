import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Underline from "./Underline";

const StyledFooter = styled.div`
  flex-direction: column;
  display: flex;
`;

const Container = styled.footer`
  position: absolute;
  width: 100%;
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const InternalLink = styled(Link)`
  margin-right: 20px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  margin-left: 20px;
  text-decoration: none;
  color: var(--text-secondary);

  :hover {
    text-decoration: underline;
  }
`;

const AbsoluteCenterSection = styled.div`
  display: flex;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-secondary);

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => {

  return (
    <StyledFooter>
      <Underline />
      <Container>
        <Section>
          <InternalLink >
            Provenance
          </InternalLink>
          <ExternalLink
            href="https://opensea.io/assets/waifusion"
            target="_blank"
            rel="noreferrer"
          >
            Soffle3
          </ExternalLink>
        </Section>
        <AbsoluteCenterSection>Team</AbsoluteCenterSection>
        <Section>
          <ExternalLink
            href="https://twitter.com/uwucrewnft"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </ExternalLink>
          <ExternalLink
            href="https://discord.gg/uwucrew"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </ExternalLink>
          <ExternalLink
            href="https://github.com/uwu-labs"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </ExternalLink>
          <ExternalLink
            href="mailto: waifusiongovernance@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </ExternalLink>
          <ExternalLink
            href="https://uwucrew.art/"
            target="_blank"
            rel="noreferrer"
          >
            uwucrew
          </ExternalLink>
        </Section>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
