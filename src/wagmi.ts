'use client';

import { getDefaultConfig } from 'connectkit';
import { createConfig, configureChains } from 'wagmi';
import { mainnet, optimism, arbitrum, goerli, sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
export const walletConnectID = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID;

const { chains } = configureChains(
  [mainnet, optimism, arbitrum, goerli, sepolia],
  [alchemyProvider({ apiKey: alchemyKey as string }), publicProvider()]
);

export const config = createConfig(
  getDefaultConfig({
    alchemyId: alchemyKey as string,
    walletConnectProjectId: walletConnectID as string,
    appName: 'Caisson',
    autoConnect: true,
    chains,
  })
);

export const ethereumClient = new EthereumClient(config, chains);
