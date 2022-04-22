import { DATA_DIR } from '@/utils/config'
import fs from 'fs/promises'
import path from 'path'
import parseMarkdownArticle from 'src/utils/parse-markdown-article'

export default async function fetchArticle(
  file: string,
  type: 'article' | 'note'
) {
  const dir = path.join(DATA_DIR, `${type}s`)

  const markdown = await fs.readFile(path.join(dir, `${file}.md`), 'utf-8')

  return parseMarkdownArticle(markdown)
}
