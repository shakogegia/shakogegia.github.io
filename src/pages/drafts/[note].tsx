import NotePage from '@/pages/notes/[note]'
import fetchArticle from '@/utils/fetch-article'

export async function getServerSideProps({
  params,
}: {
  params: { note: string }
}) {
  const note = await fetchArticle(params.note, 'draft')

  return {
    props: {
      note,
    },
  }
}

export default NotePage
