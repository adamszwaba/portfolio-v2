import { allBooks } from 'contentlayer/generated'
import { Metadata, NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import MDXProviderComponents from '@/features/page-contents/mdx-components'

type BookPageProps = {
  params: { slug: string }
}

const BookPage: NextPage<BookPageProps> = async ({ params }) => {
  const article = allBooks[0]

  if (!article) notFound()

  const MDXContent = useMDXComponent(article.body.code)

  return (
    <article>
      <MDXContent components={MDXProviderComponents} />
    </article>
  )
}

export default BookPage
