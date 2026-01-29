import { getAllWorks } from '@/lib/works'
import WorksCard from '@/components/WorksCard'

export const metadata = {
  title: 'Works',
  description: 'View my works about development, music production, and creative culture engineering.',
  openGraph: {
    title: 'Works | Benny\'s Site',
    description: 'View my works about development, music production, and creative culture engineering.',
  },
}

export default function WorksPage() {
  const works = getAllWorks()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-12">
        Works
      </h1>

      {works.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-black text-lg">
            No works yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="space-y-0">
          {works.map((work) => (
            <WorksCard key={work.slug} work={work} />
          ))}
        </div>
      )}
    </div>
  )
}
