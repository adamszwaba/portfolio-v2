import { Article } from 'contentlayer/generated'

export const shouldDisplayArticle = (article: Article) => {
  return !article.isDraft
}
