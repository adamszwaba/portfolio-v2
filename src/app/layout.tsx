import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AppBar from '@/features/page-contents/app-bar'
import Footer from '@/features/page-contents/footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adam Szwaba',
  metadataBase: new URL('https://adamszwaba.com/'),
  description: 'Software developer, kind of a person',
  icons: '/static/favicons/favicon.ico',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://adam.szwaba.dev',
    siteName: 'Adam Szwaba',
    images: [
      {
        url: 'https://adam.szwaba.dev/static/favicons/favicon.ico',
        width: 32,
        height: 32,
        alt: 'Adam Szwaba',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar />
        <main className="container mx-auto py-4 px-3">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
