import Time from '@/components/time'
import { shouldDisplayArticle } from '@/features/articles/utils'
import { allArticles } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Route } from 'next'
import Link from 'next/link'

export default function Home() {
  const articles = allArticles.sort((a, b) => compareDesc(a.publishedAt, b.publishedAt))
  return articles.filter(shouldDisplayArticle).map((article) => (
    <div key={article._id} className="flex flex-col pb-8">
      <Link href={article.slug as Route}>
        <h2 className="my-0">{article.title}</h2>
      </Link>
      <Time dateTime={article.publishedAt} />
      <div>{article.excerpt}</div>
    </div>
  ))
}
