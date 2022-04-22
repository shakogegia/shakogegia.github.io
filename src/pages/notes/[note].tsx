import type { NextPage } from 'next'
import moment from 'moment'
import Layout from '@/components/layout'
import fetchArticle from '@/utils/fetch-article'
import fetchArticles from '@/utils/fetch-articles'

const NotePage: NextPage<{ note: Article }> = ({ note }) => {
  return (
    <Layout>
      <div className="max-w-3xl m-auto mt-8 font-mono">
        <h3 className="text-lg font-semibold">{note.title}</h3>
        <article
          className="prose max-w-none mt-6 text-gray-600"
          dangerouslySetInnerHTML={{
            __html: note.content,
          }}
        />

        <div className="mt-14">
          <em className="font-extralight space-mono text-gray-400">
            Published on {moment(note.date).format('MMMM YYYY')}
          </em>
        </div>

        <div className="py-20">
          <div className="w-full border-t border-gray-100"></div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }: { params: { note: string } }) {
  const note = await fetchArticle(params.note, 'note')

  return {
    props: {
      note,
    },
  }
}

export async function getStaticPaths() {
  const notes = await fetchArticles({ type: 'note' })

  const paths = notes.map((note) => ({
    params: { note: note.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default NotePage
