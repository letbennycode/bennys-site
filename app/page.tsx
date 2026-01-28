import Hero from '@/components/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Creative culture engineer building teams, products, and culture. Senior fullstack developer and music producer.',
  openGraph: {
    title: "Benny's Site - Creative Culture Engineer",
    description: 'Creative culture engineer building teams, products, and culture. Senior fullstack developer and music producer.',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  )
}

