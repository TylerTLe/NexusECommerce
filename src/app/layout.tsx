import type { Metadata } from 'next'
import './globals.css'


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
      <body >
        <main className='p-4 max-w- m-auto min-w-[300px]'>
          {children}
        </main>
        </body>
    </html>
  )
}
