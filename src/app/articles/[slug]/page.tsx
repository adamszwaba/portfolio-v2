import { allArticles } from 'contentlayer/generated'
import { NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import MDXProviderComponents from '@/features/page-contents/mdx-components'

export async function generateStaticParams() {
  const slugs = allArticles.map((article) => article.slug)
  return slugs.map((slug) => ({ slug }))
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
