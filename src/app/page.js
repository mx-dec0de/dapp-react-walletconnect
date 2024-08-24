'use client';

import React from 'react';
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";  // Импортируем объект сети Polygon

export default function HomePage() {
  return (
    <AppWithProviders />
  );
}

function AppWithProviders() {
  return (
    <ThirdwebProvider
      clientId="769dc6d5af32829444c9cbc76d834461"  // Ваш Project ID от thirdweb (обязательно!)
      supportedWallets={[
        metamaskWallet({ recommended: true,  wallet: "metamask",
          connector: "injected", }),
        walletConnect({
          projectId: "c09195e9de8d63a40ec97d627cfd633c",  // Ваш Project ID для WalletConnect
          wallet: "walletconnect",
          connector: "walletconnect",
          options: {
            qrcode: true,
            mobileLinks: ["trust", "metamask", "rainbow", "argent", "coinbase", "walletconnect"],
          },
        }),
      ]}
      activeChain={Polygon}  // Указываем активную сеть Polygon
    >
      <WalletApp />
    </ThirdwebProvider>
  );
}

function WalletApp() {
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h1 className="title">Connect Your Wallet</h1>

          {/* Компонент ConnectWallet для работы с Polygon */}
          <ConnectWallet 
            theme="dark"  // Темная тема
            btnTitle="Connect Your Wallet"  // Текст кнопки
            modalTitle="Select a Wallet"  // Текст в модальном окне
          />
        </div>
      </div>
    </section>
  );
}
