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
  description: 'Software developer, kind of a person',
  icons: '/static/favicons/favicon.ico',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar />
        <main className="container mx-auto py-4">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
