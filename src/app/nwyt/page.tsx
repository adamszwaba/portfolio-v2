import Time from '@/components/time'
import { shouldDisplayArticle } from '@/features/articles/utils'
import { allNWYTs } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Route } from 'next'
import Link from 'next/link'

export default function Home() {
  const articles = allNWYTs.sort((a, b) => compareDesc(a.publishedAt, b.publishedAt))
  return (
    <>
      <div className="not-prose mb-6 flex flex-col justify-between rounded-lg bg-gray-700 p-3  dark:bg-white shadow-lg shadow-gray-700 dark:shadow-white">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-100 dark:text-gray-800">
          Not Worth Your Time
        </h1>
        <p className="text-gray-300 dark:text-gray-500 text-xs sm:text-lg">
          In case you ever wondered. Trivia, non-technical, mostly Polish.
        </p>
      </div>
      {articles.filter(shouldDisplayArticle).map((article) => (
        <div key={article._id} className="flex flex-col pb-8">
          <Link href={article.slug as Route}>
            <h2 className="my-0">{article.title}</h2>
          </Link>
          <Time dateTime={article.publishedAt} />
          <div>{article.excerpt}</div>
        </div>
      ))}
    </>
  )
}
