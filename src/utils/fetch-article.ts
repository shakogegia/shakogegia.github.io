import { DATA_DIR, PUBLIC_DIR } from '@/utils/config'
import fs from 'fs'
import glob from 'fast-glob'
import path from 'path'
import parseMarkdownArticle from 'src/utils/parse-markdown-article'

export default async function fetchArticle(
  file: string,
  type: 'article' | 'note' | 'draft'
) {
  const dir = path.join(DATA_DIR, `${type}s`)

  let markdown: string = ''

  if (fs.existsSync(path.join(dir, `${file}.md`))) {
    markdown = await fs.readFileSync(path.join(dir, `${file}.md`), 'utf-8')
  } else if (fs.existsSync(path.join(dir, `${file}/index.md`))) {
    markdown = await fs.readFileSync(
      path.join(dir, `${file}/index.md`),
      'utf-8'
    )

    const files = await glob(path.join(dir, `${file}/*.{png,jpg,gif}`))

    const destDir = path.join(PUBLIC_DIR, `content/${file}/`)

    if (fs.existsSync(destDir)) {
      fs.rmdirSync(destDir, { recursive: true })
    } else {
      fs.mkdirSync(destDir, { recursive: true })
    }

    files.forEach((item) => {
      const fileName = path.basename(item)

      fs.cpSync(item, path.join(destDir, `${fileName}`))

      markdown = markdown.replaceAll(
        `{ ${fileName} }`,
        `/content/${file}/${fileName}`
      )
    })
  }

  if (!markdown) {
    throw new Error(`Article ${file} not found`)
  }

  return parseMarkdownArticle(markdown)
}
