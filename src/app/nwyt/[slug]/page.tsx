import { allNWYTs } from 'contentlayer/generated'
import { Metadata, NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import MDXProviderComponents from '@/features/page-contents/mdx-components'
import Time from '@/components/time'
import { shouldDisplayArticle } from '@/features/articles/utils'

type ArticlePageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = allNWYTs.filter(shouldDisplayArticle).map((article) => article.slug)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params: { slug } }: ArticlePageProps): Promise<Metadata> {
  const article = allNWYTs.find((article) => article.slug === `/nwyt/${slug}`)
  if (!article) notFound()
  return {
    title: `${article.title} | Adam Szwaba`,
    description: article.excerpt,
    metadataBase: new URL('https://adamszwaba.com'),
    openGraph: {
      type: 'article',
      authors: ['Adam Szwaba'],
      publishedTime: article.publishedAt,
      description: article.excerpt,
    },
  }
}

const ArticlePage: NextPage<ArticlePageProps> = async ({ params }) => {
  const article = allNWYTs.find((article) => article.slug === `/nwyt/${params.slug}`)

  if (!article) notFound()

  if (article.isDraft) notFound()

  const MDXContent = useMDXComponent(article.body.code)

  return (
    <article>
      <h1 className="mb-0">{article.title}</h1>
      <Time dateTime={article.publishedAt} />
      <MDXContent components={MDXProviderComponents} />
    </article>
  )
}

export default ArticlePage
