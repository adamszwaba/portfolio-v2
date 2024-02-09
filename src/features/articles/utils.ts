import { Article, NWYT } from 'contentlayer/generated'

export const shouldDisplayArticle = (article: Article | NWYT) => {
  return !article.isDraft
}
