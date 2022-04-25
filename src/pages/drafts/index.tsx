import Notes from '@/pages/notes'
import fetchArticles from '@/utils/fetch-articles'

export async function getStaticProps() {
  const notes = await fetchArticles({ type: 'draft' })

  return {
    props: {
      notes,
      draft: true,
    },
  }
}

export default Notes
