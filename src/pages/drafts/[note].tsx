import NotePage from '@/pages/notes/[note]'
import fetchArticle from '@/utils/fetch-article'
import fetchArticles from '@/utils/fetch-articles'

export async function getStaticProps({ params }: { params: { note: string } }) {
  const note = await fetchArticle(params.note, 'draft')

  return {
    props: {
      note,
      draft: true,
    },
  }
}

export async function getStaticPaths() {
  const notes = await fetchArticles({ type: 'draft' })

  const paths = notes.map((note) => ({
    params: { note: note.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default NotePage
