import { DATA_DIR } from '@/utils/config'
import fetchArticle from '@/utils/fetch-article'
import fs from 'fs/promises'
import path from 'path'

type Options = {
  type: 'article' | 'note'
}

export default async function fetchArticles(options: Options) {
  const dir = path.join(DATA_DIR, `${options.type}s`)

  const files = (await fs.readdir(dir)).filter((file) => file.endsWith('.md'))

  const slugs = files.map((file) => file.replace('.md', ''))

  const articles = await Promise.all(
    slugs.map(async (slug) => ({
      slug,
      ...(await fetchArticle(slug, options.type)),
    }))
  )

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
