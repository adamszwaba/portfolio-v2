import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { default as rpc, Options } from 'rehype-pretty-code'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: 'articles/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    excerpt: {
      type: 'string',
      required: true,
    },
    isDraft: {
      type: 'boolean',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (article) => `/${article._raw.flattenedPath}`,
    },
  },
}))

export const Nwyt = defineDocumentType(() => ({
  name: 'NWYT',
  filePathPattern: 'nwyt/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    excerpt: {
      type: 'string',
      required: true,
    },
    isDraft: {
      type: 'boolean',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (article) => `/${article._raw.flattenedPath}`,
    },
  },
}))

const rpcOptions: Partial<Options> = {
  theme: 'catppuccin-mocha',
}

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Article, Nwyt],
  mdx: {
    //@ts-expect-error
    rehypePlugins: [[rpc, rpcOptions]],
  },
})
