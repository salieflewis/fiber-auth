import '../styles/globals.css'
import { Providers } from './providers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Public Assembly - Caisson',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='bg-black'>
      <body className='h-screen w-screen'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
