import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import  BootstrapClient from './components/BootstrapClient';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '7TravelMoney',
    template: '%s'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BootstrapClient />
        </body>
    </html>
  )
}
