import Layout from '@/components/layout'
import fetchArticle from '@/utils/fetch-article'
import fetchArticles from '@/utils/fetch-articles'
import moment from 'moment'
import type { NextPage } from 'next'
import Script from 'next/script'

const NotePage: NextPage<{ note: Article; draft?: boolean }> = ({
  note,
  draft,
}) => {
  return (
    <Layout title={note.title} cover={note.cover}>
      {draft && <Script src="https://unpkg.com/turndown/dist/turndown.js" />}

      <div className="max-w-3xl m-auto mt-8">
        {draft && <CopyActions />}

        <h3
          className="text-xl iAWriterDuospaceBold DejaVuSansMonoBold"
          contentEditable={draft}
        >
          {note.title}
        </h3>

        <article
          className="prose max-w-none mt-6 iAWriterDuospace DejaVuSansMono text-gray-500"
          id="content"
          contentEditable={draft}
          dangerouslySetInnerHTML={{
            __html: note.content,
          }}
        />

        <div className="mt-14">
          <em className="font-extralight iAWriterDuospaceItalic text-gray-400">
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

function CopyActions() {
  return (
    <div className="mb-4 space-x-4 flex justify-end">
      <a
        className="font-mono font-semibold hover:underline cursor-pointer text-indigo-500"
        onClick={() => {
          navigator.clipboard.writeText(
            turndown(document.getElementById('content'))
          )
        }}
      >
        Copy as Markdown
      </a>
      <a
        className="font-mono font-semibold hover:underline cursor-pointer text-indigo-500"
        onClick={() => {
          navigator.clipboard.writeText(
            document.getElementById('content')?.innerHTML || ''
          )
        }}
      >
        Copy as HTML
      </a>
    </div>
  )
}

function turndown(element: HTMLElement | null) {
  return (window as any)
    .TurndownService()
    .turndown(document.getElementById('content'))
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
