import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { ConditionalNavigation } from '@/components/conditional-navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PowerFlow - Power Electronics Control Platform',
  description: 'Advanced power electronics control and simulation platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ConditionalNavigation />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}