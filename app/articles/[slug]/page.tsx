import { getAllArticles, getArticleBySlug } from '@/lib/articles'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Benny's Site`,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
          {article.title}
        </h1>
        {formattedDate && (
          <p className="text-sm text-black uppercase tracking-wide">
            {formattedDate}
          </p>
        )}
      </header>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl font-bold uppercase tracking-tight text-black mt-8 mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-bold uppercase tracking-tight text-black mt-6 mb-3" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-bold text-black mt-4 mb-2" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-black leading-relaxed mb-4" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-black underline hover:no-underline" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside mb-4 text-black space-y-2" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside mb-4 text-black space-y-2" {...props} />
            ),
            code: ({ node, ...props }) => (
              <code className="bg-gray-100 px-1 py-0.5 text-sm font-mono" {...props} />
            ),
            pre: ({ node, ...props }) => (
              <pre className="bg-gray-100 p-4 mb-4 overflow-x-auto border border-black" {...props} />
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}
