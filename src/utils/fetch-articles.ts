import { DATA_DIR } from '@/utils/config'
import fetchArticle from '@/utils/fetch-article'
import fs from 'fs'
import path from 'path'

type Options = {
  type: 'article' | 'note' | 'draft'
}

export default async function fetchArticles(options: Options) {
  const dir = path.join(DATA_DIR, `${options.type}s`)

  const files = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((file) => file.name.endsWith('.md') || file.isDirectory())

  const slugs = files.map((file) => file.name.replace('.md', ''))

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
