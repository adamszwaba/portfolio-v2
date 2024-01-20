import { allArticles } from 'contentlayer/generated'
import { Metadata, NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import MDXProviderComponents from '@/features/page-contents/mdx-components'

export async function generateStaticParams() {
  const slugs = allArticles.map((article) => article.slug)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = allArticles.find((article) => article.slug === `/articles/${slug}`)
  if (!article) notFound()
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: 'article',
      authors: ['Adam Szwaba'],
      publishedTime: article.publishedAt,
      description: article.excerpt,
    },
  }
}

const ArticlePage: NextPage<{ params: { slug: string } }> = async ({ params }) => {
  const article = allArticles.find((article) => article.slug === `/articles/${params.slug}`)

  if (!article) notFound()

  const MDXContent = useMDXComponent(article.body.code)

  return (
    <article>
      <h1>{article.title}</h1>
      <MDXContent components={MDXProviderComponents} />
      <h4 className="ml-auto w-max text-slate-500">{article.publishedAt}</h4>
    </article>
  )
}

export default ArticlePage
