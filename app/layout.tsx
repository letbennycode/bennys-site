import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: "Benny's Site",
    template: "%s | Benny's Site",
  },
  description: "Creative culture engineer, senior fullstack developer, and music producer.",
  keywords: ['fullstack developer', 'music producer', 'creative engineer', 'culture engineer'],
  authors: [{ name: 'Benny' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
    siteName: "Benny's Site",
    title: "Benny's Site",
    description: "Creative culture engineer, senior fullstack developer, and music producer.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Benny's Site",
    description: "Creative culture engineer, senior fullstack developer, and music producer.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
