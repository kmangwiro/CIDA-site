import type { Metadata } from 'next'
import { DM_Sans, Merriweather } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'], variable: '--font-merriweather' })

export const metadata: Metadata = {
  title: 'CIDA - Community Innovation and Development Aid',
  description: 'Empowering communities through innovation. Building resilient, healthy and sustainable communities across Zimbabwe.',
  icons: {
    icon: '/images/cida-original.png',
    apple: '/images/cida-original.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
