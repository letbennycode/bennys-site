import Link from 'next/link'
import { Work } from '@/lib/works'

interface WorksCardProps {
  work: Work
}

export default function WorksCard({ work }: WorksCardProps) {
  const formattedDate = work.date
    ? new Date(work.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <Link
      href={`/works/${work.slug}`}
      className="block border-b border-black py-6 hover:bg-gray-50 transition-colors"
    >
      <h2 className="text-2xl font-bold uppercase tracking-tight text-black mb-2">
        {work.title}
      </h2>
      {formattedDate && (
        <p className="text-sm text-black mb-3 uppercase tracking-wide">
          {formattedDate}
        </p>
      )}
      {work.excerpt && (
        <p className="text-black leading-relaxed">
          {work.excerpt}
        </p>
      )}
    </Link>
  )
}
