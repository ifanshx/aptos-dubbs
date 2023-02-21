import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  WalletProvider,
  AptosWalletAdapter,
  MartianWalletAdapter,
  PontemWalletAdapter,
  RiseWalletAdapter,
} from '@manahippo/aptos-wallet-adapter';

const wallets = [
  new RiseWalletAdapter(),
  new MartianWalletAdapter(),
  new AptosWalletAdapter(),
  new PontemWalletAdapter(),
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WalletProvider
      wallets={wallets}
      autoConnect={true} /** allow auto wallet connection or not **/
      onError={(error) => {
        toast.error("Handle Error Message", error);
      }}
    >
      <App />
    </WalletProvider>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
  </React.StrictMode>
);
