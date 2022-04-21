import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import markdownToHtml from '@/utils/markdown-to-html'

export default async function parseMarkdownArticle(
  markdown: string
): Promise<Article> {
  const { data, content, excerpt } = matter(markdown, {
    excerpt: true,
    excerpt_separator: '<!-- read more -->',
  })

  const result = await markdownToHtml(content)
  const excerptHtml = await markdownToHtml(data.excerpt || excerpt)

  return {
    title: data.title,
    date: data.date,
    cover: data.cover || null,
    excerpt: excerptHtml,
    content: result,
  }
}
