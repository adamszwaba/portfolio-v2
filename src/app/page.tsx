import { allArticles } from 'contentlayer/generated'
import { Route } from 'next'
import Link from 'next/link'

export default function Home() {
  const articles = allArticles
  return articles.map((article) => (
    <div key={article._id} className="flex flex-col justify-between">
      <Link href={article.slug as Route}>
        <h2 className="mb-0">{article.title}</h2>
      </Link>
      <h4 className="mt-0 text-slate-500">{article.publishedAt}</h4>
      <div role="doc-subtitle">{article.excerpt}</div>
    </div>
  ))
}
