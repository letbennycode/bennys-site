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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black mb-6">
            About
          </h2>
          <div className="space-y-4 text-black leading-relaxed">
            <p className="text-lg">
              I&apos;m a <strong className="font-bold text-black">creative and culture engineer</strong> who bridges the gap between technical excellence and creative vision. 
              As a senior fullstack developer and music producer, I build not just products, but the culture and teams that bring them to life.
            </p>
            <p>
              My work sits at the intersection of code, creativity, and culture—transforming ideas into reality while fostering environments where innovation thrives.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

