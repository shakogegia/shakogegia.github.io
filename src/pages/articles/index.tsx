import Layout from '@/components/layout'
import fetchArticles from '@/utils/fetch-articles'
import moment from 'moment'
import Link from 'next/link'
import type { NextPage } from 'next'

const ArticlesPage: NextPage<{
  articles: Array<Article & { slug: string }>
}> = ({ articles }) => {
  return (
    <Layout>
      <section className="mt-10">
        {articles.map((article, i) => (
          <div key={article.slug}>
            <Article article={article} />
            {i !== articles.length - 1 && (
              <div className="py-20">
                <div className="w-full border-t border-gray-100"></div>
              </div>
            )}
          </div>
        ))}
      </section>
    </Layout>
  )
}

function Article({ article }: { article: Article & { slug: string } }) {
  return (
    <article>
      {article.cover && (
        <figure className="mb-6">
          <img
            src={article.cover}
            alt={article.title}
            className="w-full rounded-md"
          />
        </figure>
      )}

      <Link href={`/articles/${article.slug}`} passHref>
        <h2 className="text-3xl font-normal leading-normal mt-0 mb-0 text-gray-800">
          {article.title}
        </h2>
      </Link>
      <small className="text-gray-300">
        {moment(article.date).format('MMMM YYYY')}
      </small>

      <article
        className="prose max-w-none pt-6 text-gray-500"
        dangerouslySetInnerHTML={{ __html: article.excerpt }}
      />

      <div className="mt-3">
        <Link href={`/articles/${article.slug}`}>
          <a className="font-semibold text-lg group text-gray-600 hover:text-indigo-500 transition-colors">
            read more
            <span className="transition-all group-hover:ml-1"> →</span>
          </a>
        </Link>
      </div>
    </article>
  )
}

export async function getStaticProps() {
  const articles = await fetchArticles({ type: 'article' })
  return {
    props: {
      articles,
    },
  }
}

export default ArticlesPage
