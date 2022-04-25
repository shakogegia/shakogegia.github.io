import Layout from '@/components/layout'
import fetchArticles from '@/utils/fetch-articles'
import type { NextPage } from 'next'
import Link from 'next/link'

type Note = Article & { slug: string }

const Notes: NextPage<{ notes: Note[]; draft?: boolean }> = ({
  notes,
  draft,
}) => {
  return (
    <Layout title="Notes">
      <div className="max-w-3xl m-auto">
        <div className="flex flex-col align-center text-center iAWriterDuospace">
          <span className="text-9xl">📜</span>
          <h2 className=" mt-6 text-3xl">Digital Notes</h2>
          <h6 className=" mt-6 text-md">notes on things</h6>
        </div>

        <div className="mt-12 flex flex-col space-y-8">
          {notes.map((note) => (
            <Note key={note.slug} note={note} draft={draft} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

function Note({ note, draft }: { note: Note; draft?: boolean }) {
  const url = draft ? '/drafts' : '/notes'
  return (
    <Link href={`/${url}/${note.slug}`}>
      <a className="space-y-2 group iAWriterDuospace">
        <h3 className="text-lg font-semibold group-hover:underline">
          {note.title}
        </h3>
        <article
          className="max-w-none text-gray-500 group-hover:text-gray-700"
          dangerouslySetInnerHTML={{
            __html: note.excerpt,
          }}
        />
      </a>
    </Link>
  )
}

export async function getStaticProps() {
  const notes = await fetchArticles({ type: 'note' })
  return {
    props: {
      notes,
    },
  }
}

export default Notes
