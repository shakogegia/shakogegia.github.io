import fetchArticle, { ARTICLES_DIR } from '@/utils/fetch-article'
import fs from 'fs/promises'

export default async function fetchArticles() {
  const files = (await fs.readdir(ARTICLES_DIR)).filter((file) =>
    file.endsWith('.md')
  )
  const slugs = files.map((file) => file.replace('.md', ''))

  const articles = await Promise.all(
    slugs.map(async (slug) => ({
      slug,
      ...(await fetchArticle(slug)),
    }))
  )

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
