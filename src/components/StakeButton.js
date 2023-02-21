import React, { useState } from "react";
import { useSelector } from "react-redux";
import BN from "bn.js";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import Button from "./Button";
import Popup from "./Popup";
import Input from "./Input";

const PopupContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type Props = {
  refresh: () => Promise<void>;
  approved: boolean;
  balance: string;
};

const StakeButton = => {
 
  const approve = async () => {

  const stake = async () => {

  return (
    <div>
      <Button
        primary
        onClick={() => {
          if (loading) return;
          if (!props.approved) approve();
          else setPopupOpen(true);
        }}
      >
        {loading
          ? t("loading")
          : !props.approved
          ? t("buttons.approveLp")
          : t("buttons.stakeLp")}
      </Button>
      <Popup
        show={poupOpen}
        close={() => setPopupOpen(false)}
        header="LP to Stake"
        content={
          <PopupContent>
            <Input
              value={amount}
              update={(value: string) => setAmount(value)}
              max={props.balance}
            />
          </PopupContent>
        }
        buttonText={loading ? t("loading") : t("buttons.stakeLp")}
        buttonAction={() => stake()}
      />
    </div>
  );
};

export default StakeButton;
