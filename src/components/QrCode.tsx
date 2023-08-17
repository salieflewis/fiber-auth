'use client';

import { W3mQrCode } from '@web3modal/react';

export function QrCode() {
  return (
    <W3mQrCode
      size={200}
      imageUrl='https://ipfs.io/ipfs/bafybeibelx2bwoj2vx3ycoyvgnhx246afutyp2tzi4uc7767kq2uqtxubq/whiteSquare.png'
      uri='https://github.com/salieflewis/fiber-auth'
    />
  );
}
