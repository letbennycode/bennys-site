import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export const metadata = {
  title: 'Articles',
  description: 'Read articles about development, music production, and creative culture engineering.',
  openGraph: {
    title: 'Articles | Benny\'s Site',
    description: 'Read articles about development, music production, and creative culture engineering.',
  },
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-12">
        Articles
      </h1>

      {articles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-black text-lg">
            No articles yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="space-y-0">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}
