import Link from 'next/link'
import { Article } from '@/lib/articles'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block border-b border-black py-6 hover:bg-gray-50 transition-colors"
    >
      <h2 className="text-2xl font-bold uppercase tracking-tight text-black mb-2">
        {article.title}
      </h2>
      {formattedDate && (
        <p className="text-sm text-black mb-3 uppercase tracking-wide">
          {formattedDate}
        </p>
      )}
      {article.excerpt && (
        <p className="text-black leading-relaxed">
          {article.excerpt}
        </p>
      )}
    </Link>
  )
}
