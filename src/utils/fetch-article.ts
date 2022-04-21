import fs from 'fs/promises'
import path from 'path'
import parseMarkdownArticle from 'src/utils/parse-markdown-article'

export const ARTICLES_DIR = path.join(process.env.ROOT || '', 'articles')

export default async function fetchPost(file: string) {
  const markdown = await fs.readFile(
    path.join(ARTICLES_DIR, `${file}.md`),
    'utf-8'
  )

  return parseMarkdownArticle(markdown)
}
