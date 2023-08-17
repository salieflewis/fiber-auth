'use client'

import { ConnectKitProvider } from 'connectkit'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import { config, ethereumClient, walletConnectID } from '../wagmi'
import { Web3Modal } from '@web3modal/react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <>
    <WagmiConfig config={config}>
      <ConnectKitProvider theme='minimal'>
        {mounted && children}
      </ConnectKitProvider>
    </WagmiConfig>
    <Web3Modal projectId={walletConnectID as string} ethereumClient={ethereumClient} />
    </>
  )
}
