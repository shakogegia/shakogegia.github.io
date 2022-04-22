import markdownToHtml from '@/utils/markdown-to-html'
import matter from 'gray-matter'

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
