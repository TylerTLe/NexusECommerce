import type { Metadata } from 'next'
import './globals.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer'
import SessionProvider from "./SessionProvider"


export const metadata: Metadata = {
  title: 'Nexus Marketplace',
  description: 'Sell anything, anywhere.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <NavBar />
          <main className='p-4 max-w- m-auto min-w-[300px]'>
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
