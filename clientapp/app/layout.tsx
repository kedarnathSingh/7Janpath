import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import BootstrapClient from './components/BootstrapClient';
import Script from 'next/script';

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
      <head>
        {/* Google Tag Manager */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DXPZ2QBPXS" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DXPZ2QBPXS');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}
